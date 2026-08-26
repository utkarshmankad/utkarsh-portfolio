import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Utkarsh Mankad — Engineering Leader", short_name: "UM_", description: "Portfolio of Utkarsh Mankad, senior engineering leader.", start_url: "/", display: "standalone", background_color: "#090d11", theme_color: "#090d11", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] };
}
