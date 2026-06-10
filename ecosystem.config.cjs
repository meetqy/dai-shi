module.exports = {
  apps: [
    {
      name: "dai-shi",
      script: "pnpm",
      args: "start",
      instances: 1,
      exec_mode: "fork", // 如果需要多进程负载均衡，可以将 instances 改为 'max'，exec_mode 改为 'cluster'
      autorestart: true,
      watch: false,
      max_memory_restart: "4G",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // 默认端口，如有需要可修改
      },
    },
  ],
};
