import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { clinic } from "@/lib/clinic";

export const alt = "Favicon de la clínica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const letter = clinic.brand.name.trim().charAt(0).toUpperCase() || "C";

  const fontData = await readFile(
    join(process.cwd(), "app", "_fonts", "DMSerifDisplay-Italic.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "DM Serif Display",
          fontStyle: "italic",
          color: "#000000",
          fontSize: 460,
          lineHeight: 1,
        }}
      >
        {letter}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Serif Display",
          data: fontData,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
