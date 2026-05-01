const ExcelJS = require('exceljs');
const path = require('path');

async function checkDetails() {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join('..', 'Cronograma de Activides.xlsx');
    
    try {
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);

        console.log(`--- DETALLE DE CELDAS (7-11) ---`);
        for (let i = 7; i <= 11; i++) {
            let row = [];
            for (let j = 1; j <= 12; j++) {
                const cell = worksheet.getCell(i, j);
                row.push({
                    addr: cell.address,
                    val: cell.value,
                    master: cell.isMerged ? cell.master.address : null
                });
            }
            console.log(`Fila ${i}:`, JSON.stringify(row));
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

checkDetails();
