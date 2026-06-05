module.exports = {
  apps: [
    {
      name: "dai-shi",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max", // 或者根据 CPU 核心数设置，如 2
      exec_mode: "cluster", // 集群模式，适合生产环境
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
