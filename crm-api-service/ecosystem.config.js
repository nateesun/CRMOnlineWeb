module.exports = {
  apps: [
    {
      name: "CRM-API-SERVICE",
      script: "./bin/www",
      instances: 4,
      autorestart: true,
      env: {
        PORT: 5000,
        NODE_ENV: "development",
      },
      env_demo: {
        PORT: 8080,
        NODE_ENV: "demo",
      },
      env_production: {
        PORT: 5000,
        NODE_ENV: "production",
      },
    },
  ],
}
