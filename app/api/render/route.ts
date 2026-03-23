import { NextResponse } from "next/server";
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";
export const maxDuration = 900; // 15 minutos máximo (para entornos serverless)

export async function GET() {
  const outDir = path.join(process.cwd(), "out");
  const outputPath = path.join(outDir, "video-promo.mp4");

  try {
    // Si ya existe el archivo renderizado, lo sirve de inmediato
    if (fs.existsSync(outputPath)) {
      const stat = fs.statSync(outputPath);
      const fileBuffer = fs.readFileSync(outputPath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": "video/mp4",
          "Content-Disposition":
            'attachment; filename="video-camisas-deportivas.mp4"',
          "Content-Length": String(stat.size),
          "X-Already-Rendered": "true",
        },
      });
    }

    // Si no existe, renderizar primero
    fs.mkdirSync(outDir, { recursive: true });

    const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
    execSync(`${npmCmd} run remotion:render`, {
      cwd: process.cwd(),
      timeout: 600000, // 10 min
      stdio: "pipe",
    });

    if (!fs.existsSync(outputPath)) {
      return NextResponse.json(
        { error: "El render terminó pero el archivo no se generó." },
        { status: 500 }
      );
    }

    const fileBuffer = fs.readFileSync(outputPath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition":
          'attachment; filename="video-camisas-deportivas.mp4"',
        "Content-Length": String(fileBuffer.length),
        "X-Already-Rendered": "false",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Error al renderizar el video.", details: msg },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Permite eliminar el archivo cacheado para forzar un re-render
  const outputPath = path.join(process.cwd(), "out", "video-promo.mp4");
  try {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
      return NextResponse.json({ ok: true, message: "Cache eliminado." });
    }
    return NextResponse.json({ ok: true, message: "No había archivo." });
  } catch {
    return NextResponse.json({ error: "No se pudo eliminar." }, { status: 500 });
  }
}
