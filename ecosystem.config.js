module.exports = {
  apps: [
    {
      name: 'proefex',             // Name of the application
      script: './node_modules/strapi/bin/strapi.js', // Path to the Strapi start script
      args: 'start',               // Use the "start" argument to run Strapi
      env: {
        NODE_ENV: 'production',   // Set environment variable for production
      },
    },
  ],
};
