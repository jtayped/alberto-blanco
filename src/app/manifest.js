export default function manifest() {
  return {
    name: "Alberto Blanco",
    short_name: "xblanco",
    icons: [
      {
        src: "https://xblanco.es/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://xblanco.es/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#3b82f6",
    background_color: "#0b0c0e",
    display: "standalone",
    start_url: "/",
  };
}
