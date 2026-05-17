#!/bin/bash
# Script de Actualización
# Útil si subes el código a GitHub y quieres actualizar tu VPS rápidamente

echo "🚀 Iniciando proceso de actualización"

# 1. Actualizar código (Asume que estás en la rama principal)
echo "📥 Descargando cambios desde Git..."
git pull origin main

# 2. Dar permisos y llamar al script de despliegue
if [ -f "desplegar.sh" ]; then
    echo "⚙️  Ejecutando script de despliegue..."
    chmod +x desplegar.sh
    ./desplegar.sh
else
    echo "❌ Error: No se encontró el archivo desplegar.sh"
    exit 1
fi
