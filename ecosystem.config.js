module.exports = {
  apps: [
    {
      name: "lyge-landing-page",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 0.0.0.0",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3002
      }
    }
  ]
}; 