import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react()],
});
