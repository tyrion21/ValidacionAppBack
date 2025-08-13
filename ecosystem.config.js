module.exports = {
  apps: [{
    name: 'validacion-app-backend',
    script: './src/index.js', // Adjust this to your main file
    instances: 1,
    exec_mode: 'fork', // Changed from cluster to fork
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    restart_delay: 4000,
    max_restarts: 10,
    min_uptime: '10s',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    // Logging configuration
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    merge_logs: true,
    // Rotation
    max_size: '10M',
    retain: 5,
    compress: true
  }]
};
