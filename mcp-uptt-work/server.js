const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { CallToolRequestSchema, ListToolsRequestSchema } = require("@modelcontextprotocol/sdk/types.js");
const ExcelJS = require('exceljs');
const path = require('path');

const server = new Server(
  {
    name: "uptt-planner-mcp",
    version: "1.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "fill_uptt_planilla") {
    const { templatePath, outputPath, weeks, metadata } = request.params.arguments;
    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(templatePath);
    const worksheet = workbook.getWorksheet(1);

    // Llenar metadatos del encabezado si existen
    if (metadata) {
      if (metadata.profesor) worksheet.getCell('D7').value = metadata.profesor;
      if (metadata.ci) worksheet.getCell('G7').value = metadata.ci;
      if (metadata.dedicacion) worksheet.getCell('I7').value = metadata.dedicacion;
      if (metadata.carrera) worksheet.getCell('C8').value = metadata.carrera;
      if (metadata.pnf) worksheet.getCell('G8').value = metadata.pnf;
      if (metadata.trayecto) worksheet.getCell('F9').value = `Trayecto:  ${metadata.trayecto}`;
      if (metadata.trimestre) worksheet.getCell('G9').value = `Trimestre: ${metadata.trimestre}`;
      if (metadata.desde || metadata.hasta) {
        worksheet.getCell('D9').value = `Desde: ${metadata.desde || '_________'}   Hasta: ${metadata.hasta || '________'}`;
      }
      if (metadata.unidad) worksheet.getCell('G10').value = metadata.unidad;
      if (metadata.codigo) worksheet.getCell('G11').value = metadata.codigo;
      if (metadata.aula) worksheet.getCell('J11').value = metadata.aula;
      if (metadata.semestre) worksheet.getCell('C9').value = metadata.semestre;
    }

    let currentRow = 15; // Las filas de contenido empiezan en la 15

    for (const week of weeks) {
      const row = worksheet.getRow(currentRow);
      
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

  if (request.params.name === "read_uptt_planilla") {
    const { excelPath } = request.params.arguments;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);
    const worksheet = workbook.getWorksheet(1);

    const metadata = {
      profesor: worksheet.getCell('D7').value,
      ci: worksheet.getCell('G7').value,
      dedicacion: worksheet.getCell('I7').value,
      carrera: worksheet.getCell('C8').value,
      pnf: worksheet.getCell('G8').value,
      trayecto: worksheet.getCell('F9').value,
      trimestre: worksheet.getCell('G9').value,
      desde: worksheet.getCell('D9').value,
      hasta: worksheet.getCell('D9').value,
      unidad: worksheet.getCell('G10').value,
      codigo: worksheet.getCell('G11').value,
      aula: worksheet.getCell('J11').value,
      semestre: worksheet.getCell('C9').value,
    };

    const weeks = [];
    for (let i = 15; i <= 30; i++) {
      const row = worksheet.getRow(i);
      const semanaVal = row.getCell('A').value;
      if (!semanaVal) break;

      const week = {
        numero: parseInt(semanaVal.toString().replace(/[^0-9]/g, '')),
        fecha: row.getCell('B').value,
        objetivos: row.getCell('C').value,
        contenidos: row.getCell('D').value,
        horas: row.getCell('E').value,
      };

      const actVal = row.getCell('H').value;
      if (actVal) {
        week.evaluacion = {
          actividad: actVal,
          peso: row.getCell('J').value
        };
      }
      weeks.push(week);
    }

    return {
      content: [{ type: "text", text: JSON.stringify({ metadata, weeks }, null, 2) }],
    };
  }

  if (request.params.name === "edit_uptt_planilla") {
    const { excelPath, outputPath, metadata, weeks } = request.params.arguments;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);
    const worksheet = workbook.getWorksheet(1);

    if (metadata) {
      if (metadata.profesor !== undefined) worksheet.getCell('D7').value = metadata.profesor;
      if (metadata.ci !== undefined) worksheet.getCell('G7').value = metadata.ci;
      if (metadata.dedicacion !== undefined) worksheet.getCell('I7').value = metadata.dedicacion;
      if (metadata.carrera !== undefined) worksheet.getCell('C8').value = metadata.carrera;
      if (metadata.pnf !== undefined) worksheet.getCell('G8').value = metadata.pnf;
      if (metadata.trayecto !== undefined) worksheet.getCell('F9').value = `Trayecto:  ${metadata.trayecto}`;
      if (metadata.trimestre !== undefined) worksheet.getCell('G9').value = `Trimestre: ${metadata.trimestre}`;
      if (metadata.desde !== undefined || metadata.hasta !== undefined) {
        const current = worksheet.getCell('D9').value || '';
        // Intentamos preservar lo que no estamos cambiando si es posible, o simplemente sobreescribimos el bloque
        worksheet.getCell('D9').value = `Desde: ${metadata.desde || '_________'}   Hasta: ${metadata.hasta || '________'}`;
      }
      if (metadata.unidad !== undefined) worksheet.getCell('G10').value = metadata.unidad;
      if (metadata.codigo !== undefined) worksheet.getCell('G11').value = metadata.codigo;
      if (metadata.aula !== undefined) worksheet.getCell('J11').value = metadata.aula;
      if (metadata.semestre !== undefined) worksheet.getCell('C9').value = metadata.semestre;
    }

    if (weeks) {
      for (const edit of weeks) {
        const rowIndex = 14 + edit.numero;
        const row = worksheet.getRow(rowIndex);
        
        if (edit.fecha !== undefined) row.getCell('B').value = edit.fecha;
        if (edit.objetivos !== undefined) row.getCell('C').value = edit.objetivos;
        if (edit.contenidos !== undefined) row.getCell('D').value = edit.contenidos;
        if (edit.horas !== undefined) row.getCell('E').value = edit.horas;
        
        if (edit.evaluacion) {
          if (edit.evaluacion.actividad !== undefined) row.getCell('H').value = edit.evaluacion.actividad;
          if (edit.evaluacion.peso !== undefined) row.getCell('J').value = edit.evaluacion.peso;
          // Actualizamos la fecha de evaluación también
          row.getCell('F').value = edit.fecha || row.getCell('B').value;
        }
        row.commit();
      }
    }

    const finalPath = outputPath || excelPath;
    await workbook.xlsx.writeFile(finalPath);
    
    return {
      content: [{ type: "text", text: `Planilla editada con éxito en: ${finalPath}` }],
    };
  }
  
  throw new Error("Herramienta no encontrada");
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "fill_uptt_planilla",
        description: "Genera una planilla de la UPTT en Excel a partir de una plantilla con metadatos de encabezado",
        inputSchema: {
          type: "object",
          properties: {
            templatePath: { type: "string", description: "Ruta completa de la plantilla .xlsx" },
            outputPath: { type: "string", description: "Ruta donde se guardará el archivo generado" },
            metadata: {
              type: "object",
              description: "Datos del encabezado de la planilla",
              properties: {
                profesor: { type: "string" },
                ci: { type: "string" },
                dedicacion: { type: "string" },
                carrera: { type: "string" },
                pnf: { type: "string" },
                trayecto: { type: "string" },
                trimestre: { type: "string" },
                desde: { type: "string" },
                hasta: { type: "string" },
                unidad: { type: "string" },
                codigo: { type: "string" },
                aula: { type: "string" },
                semestre: { type: "string" }
              }
            },
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
      },
      {
        name: "read_uptt_planilla",
        description: "Lee una planilla de la UPTT existente y devuelve su contenido en JSON para retroalimentación de la IA",
        inputSchema: {
          type: "object",
          properties: {
            excelPath: { type: "string", description: "Ruta del archivo .xlsx a leer" }
          },
          required: ["excelPath"]
        }
      },
      {
        name: "edit_uptt_planilla",
        description: "Modifica campos específicos de una planilla existente (encabezado o semanas) sin alterar el resto",
        inputSchema: {
          type: "object",
          properties: {
            excelPath: { type: "string", description: "Ruta del archivo .xlsx a modificar" },
            outputPath: { type: "string", description: "Ruta opcional para guardar los cambios (si se omite, sobreescribe el original)" },
            metadata: {
              type: "object",
              description: "Campos del encabezado a actualizar",
              properties: {
                profesor: { type: "string" },
                ci: { type: "string" },
                dedicacion: { type: "string" },
                carrera: { type: "string" },
                pnf: { type: "string" },
                trayecto: { type: "string" },
                trimestre: { type: "string" },
                desde: { type: "string" },
                hasta: { type: "string" },
                unidad: { type: "string" },
                codigo: { type: "string" },
                aula: { type: "string" },
                semestre: { type: "string" }
              }
            },
            weeks: {
              type: "array",
              description: "Lista de semanas a modificar identificadas por su número",
              items: {
                type: "object",
                properties: {
                  numero: { type: "number", description: "Número de semana a editar (ej: 1)" },
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
                },
                required: ["numero"]
              }
            }
          },
          required: ["excelPath"]
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
