import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { clinic } from "@/lib/clinic";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 12,
          fontFamily: "DM Serif Display",
          fontStyle: "italic",
          color: "#000000",
          fontSize: 48,
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
