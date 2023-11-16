import react from "@vitejs/plugin-react";
import relay from "../22.relay/node_modules/vite-plugin-relay/dist/plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react()],
});
