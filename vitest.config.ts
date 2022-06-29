import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // FIXME: type error, but work
  plugins: [vue() as any],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
