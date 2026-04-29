const ExcelJS = require('exceljs');
const path = require('path');

async function inspectExcel() {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join('..', 'Cronograma de Activides.xlsx');
    
    try {
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1); // Tomamos la primera hoja

        console.log(`Inspeccionando hoja: ${worksheet.name}`);
        
        // Escaneamos las filas finales para buscar fórmulas (Totales)
        for (let i = 25; i <= 35; i++) {
            let rowInfo = [];
            for (let j = 1; j <= 12; j++) {
                const cell = worksheet.getCell(i, j);
                if (cell.value) {
                    rowInfo.push({
                        address: cell.address,
                        type: cell.type, // 4 es Fórmula
                        value: cell.value
                    });
                }
            }
            if (rowInfo.length > 0) {
                console.log(`Análisis Fila ${i}:`, JSON.stringify(rowInfo));
            }
        }
    } catch (error) {
        console.error('Error leyendo el archivo:', error);
    }
}

inspectExcel();
