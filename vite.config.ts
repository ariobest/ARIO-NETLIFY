
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isNetlify = !!process.env.NETLIFY;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isNetlify ? { preset: "netlify" } : true,
});
