module.exports = {
  apps: [
    {
      name: 'webdaily-online',
      script: 'server/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        REACT_APP_PUBLIC_PATH: '/web-daily-online',
        API_SERVICE: 'http://softcrmpkh.dyndns.org:5000',
      },
    },
  ],
};
