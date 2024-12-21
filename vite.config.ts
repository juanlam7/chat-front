import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "OurChat",
        short_name: "OurChat",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#242424",
        icons: [
          {
            src: "/chat-round-line.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/chat-round-line.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ]
});
