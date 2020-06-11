module.exports = {
  apps: [
    {
      name: "SERVER",
      cwd: "./server",
      script: "app.js"
    },
    {
      name: "CLIENT",
      cwd: "./client",
      script: "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
      args: "serve"
    }
  ]
}
