const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { CallToolRequestSchema, ListToolsRequestSchema } = require("@modelcontextprotocol/sdk/types.js");
const ExcelJS = require('exceljs');
const path = require('path');

const server = new Server(
  {
    name: "uptt-planner-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "fill_uptt_planilla") {
    const { templatePath, outputPath, weeks } = request.params.arguments;
    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(templatePath);
    const worksheet = workbook.getWorksheet(1);

    let currentRow = 15; // Empezamos en la fila 15

    for (const week of weeks) {
      const row = worksheet.getRow(currentRow);
      
      // Forzamos texto en la columna Semana para evitar problemas de formato
      row.getCell('A').value = `Semana ${week.numero}`;
      row.getCell('B').value = week.fecha;
      row.getCell('C').value = week.objetivos;
      row.getCell('D').value = week.contenidos;
      row.getCell('E').value = week.horas || 4;
      
      if (week.evaluacion) {
        row.getCell('F').value = week.fecha;
        row.getCell('H').value = week.evaluacion.actividad;
        row.getCell('I').value = week.objetivos;
        row.getCell('J').value = week.evaluacion.peso;
      }
      
      row.commit();
      currentRow++;
    }

    await workbook.xlsx.writeFile(outputPath);
    
    return {
      content: [{ type: "text", text: `Planilla generada con éxito en: ${outputPath}` }],
    };
  }
  
  throw new Error("Herramienta no encontrada");
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "fill_uptt_planilla",
        description: "Genera una planilla de la UPTT en Excel a partir de una plantilla",
        inputSchema: {
          type: "object",
          properties: {
            templatePath: { type: "string", description: "Ruta completa de la plantilla .xlsx" },
            outputPath: { type: "string", description: "Ruta donde se guardará el archivo generado" },
            weeks: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  numero: { type: "number" },
                  fecha: { type: "string" },
                  objetivos: { type: "string" },
                  contenidos: { type: "string" },
                  horas: { type: "number" },
                  evaluacion: {
                    type: "object",
                    properties: {
                      actividad: { type: "string" },
                      peso: { type: "string" }
                    }
                  }
                }
              }
            }
          },
          required: ["templatePath", "outputPath", "weeks"]
        }
      }
    ]
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
