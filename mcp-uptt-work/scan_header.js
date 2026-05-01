const ExcelJS = require('exceljs');
const path = require('path');

async function scanHeader() {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join('..', 'Cronograma de Activides.xlsx');
    
    try {
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);

        console.log(`--- ESCANEO DE ENCABEZADO ---`);
        for (let i = 1; i <= 14; i++) {
            for (let j = 1; j <= 15; j++) {
                const cell = worksheet.getCell(i, j);
                if (cell.value && typeof cell.value === 'string') {
                    console.log(`[${cell.address}] ${cell.value}`);
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

scanHeader();
