import { defineConfig, tsconfigPaths } from "deves/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    allowedHosts: ["todo.go.com"],
  },
  plugins: [reactRouter(), tsconfigPaths(), tailwindcss()],
});
