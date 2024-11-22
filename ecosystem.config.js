module.exports = {
  apps: [
    {
      name: '3022-pottencia-app',              // Nombre de la aplicación
      script: 'node_modules/next/dist/bin/next', // Ruta del binario de Next.js
      args: 'start -p 3022',                   // Argumentos para iniciar el servidor en el puerto 3022
      cwd: './',                               // Directorio de trabajo donde se ejecuta la aplicación
      exec_mode: 'cluster',                    // Modo clúster para usar múltiples núcleos de CPU (opcional)
      instances: 'max',                        // Usa tantas instancias como núcleos tiene el servidor (puedes poner un número específico si prefieres)
      watch: false,                            // No habilitar "watching" en producción, ya que puede afectar el rendimiento
      env: {
        NODE_ENV: 'production',                // Variable de entorno para producción
      },
      env_development: {
        NODE_ENV: 'development',               // Variable de entorno para desarrollo
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',  // Formato para los logs
    },
  ],
};

