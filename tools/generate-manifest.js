const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

/**
 * Script para generar el inventario de archivos (assets-manifest.json)
 * que el Service Worker debe guardar para el modo Offline.
 */

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version;

// Definir qué archivos queremos guardar
const patterns = [
    'index.html',
    '_sidebar.md',
    'inicio.md',
    '*.css',
    '*.js',
    'img/**/*',
    'programacion II/**/*.md',
    'Algorítmica y Programación/**/*.md',
    'Redes/**/*.md',
    'cronograma/**/*'
];

console.log(`📦 Generando manifiesto de activos para la versión ${version}...`);

let assets = [];

patterns.forEach(pattern => {
    const files = globSync(pattern, { nodir: true });
    assets = assets.concat(files.map(f => f.replace(/\\/g, '/')));
});

// Eliminar duplicados si los hay
assets = [...new Set(assets)];

const manifest = {
    version: version,
    timestamp: new Date().toISOString(),
    assets: assets
};

fs.writeFileSync('assets-manifest.json', JSON.stringify(manifest, null, 2));

console.log(`✅ Manifiesto creado con ${assets.length} archivos.`);
console.log(`🚀 Listo para modo offline.`);
