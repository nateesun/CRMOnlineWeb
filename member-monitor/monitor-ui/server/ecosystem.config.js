module.exports = {
  apps : [
    {
      name: 'monitor-ui',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};