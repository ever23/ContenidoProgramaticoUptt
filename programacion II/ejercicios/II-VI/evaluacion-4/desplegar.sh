#!/bin/bash
# Script de Despliegue Docker (Producción)

# Extraer la versión dinámicamente del package.json usando node
VERSION=$(node -p "require('./package.json').version" 2>/dev/null || echo "1.0.0")

echo "🏗️  Iniciando construcción y despliegue Docker v$VERSION..."

# 1. Limpieza de contenedores anteriores (Opcional, docker-compose up lo hace automático)
echo "🧹 Limpiando versiones antiguas..."
docker-compose down

# 2. Construcción de la imagen y lanzamiento
echo "🚢 Levantando base de datos y aplicación Node.js..."
docker-compose up --build -d

echo "✅ Despliegue v$VERSION completado con éxito."
docker ps | grep uptt-app-segura
echo "📜 Para ver los logs en tiempo real, usa: docker logs --tail 50 -f uptt-app-segura"
