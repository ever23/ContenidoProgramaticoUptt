const ExcelJS = require('exceljs');
const path = require('path');

async function generatePlanilla(filename, weeks) {
    const templatePath = path.join('..', 'Cronograma de Activides.xlsx');
    const outputPath = path.join('..', filename);
    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(templatePath);
    const worksheet = workbook.getWorksheet(1);

    let currentRow = 15;
    for (const week of weeks) {
        const row = worksheet.getRow(currentRow);
        row.getCell('A').value = `Semana ${week.semana}`;
        row.getCell('B').value = week.fecha;
        row.getCell('C').value = week.objetivos;
        row.getCell('D').value = week.contenidos;
        row.getCell('E').value = 4;
        
        if (week.evaluacion) {
            row.getCell('F').value = week.fecha;
            row.getCell('H').value = week.evaluacion.actividad;
            row.getCell('J').value = week.evaluacion.peso;
            row.getCell('I').value = week.objetivos;
        }
        row.commit();
        currentRow++;
    }

    await workbook.xlsx.writeFile(outputPath);
    console.log(`Generado: ${filename}`);
}

async function run() {
    // Mes 1
    await generatePlanilla('Planilla_Algoritmica_T1_Mes1.xlsx', [
        { semana: 1, fecha: "26/01/2026", objetivos: "Unidad 1", contenidos: "Conceptos básicos, Algoritmos y Datos." },
        { semana: 2, fecha: "02/02/2026", objetivos: "Unidad 2", contenidos: "Metodología de las 4 Fases y Pseudocódigo." },
        { semana: 3, fecha: "09/02/2026", objetivos: "Unidad 1 y 2", contenidos: "Fundamentos de Lógica.", evaluacion: { actividad: "Eval 1: Examen Escrito", peso: "25%" } },
        { semana: 4, fecha: "16/02/2026", objetivos: "Unidad 2", contenidos: "Entorno de desarrollo: Node.js y VS Code." }
    ]);

    // Mes 2
    await generatePlanilla('Planilla_Algoritmica_T1_Mes2.xlsx', [
        { semana: 5, fecha: "23/02/2026", objetivos: "Unidad 2", contenidos: "Diagramas de Flujo y traducción a JS." },
        { semana: 6, fecha: "02/03/2026", objetivos: "Unidad 2", contenidos: "Herramientas del Programador.", evaluacion: { actividad: "Eval 2: Examen Escrito", peso: "25%" } },
        { semana: 7, fecha: "09/03/2026", objetivos: "Unidad 3", contenidos: "Estructuras de Decisión e If/Else." },
        { semana: 8, fecha: "16/03/2026", objetivos: "Unidad 3", contenidos: "Álgebra de Boole y Truthy/Falsy." }
    ]);

    // Mes 3
    await generatePlanilla('Planilla_Algoritmica_T1_Mes3.xlsx', [
        { semana: 9, fecha: "23/03/2026", objetivos: "Unidad 3", contenidos: "Arquitectura de Control.", evaluacion: { actividad: "Eval 3: Examen Mixto", peso: "25%" } },
        { semana: 10, fecha: "30/03/2026", objetivos: "Unidad 4", contenidos: "Estructuras Iterativas: Bucle For." },
        { semana: 11, fecha: "06/04/2026", objetivos: "Unidad 4", contenidos: "Bucles While y Do...While." },
        { semana: 12, fecha: "13/04/2026", objetivos: "Unidad 4", contenidos: "Control Iterativo.", evaluacion: { actividad: "Eval 4: Laboratorio", peso: "25%" } }
    ]);
}

run();
