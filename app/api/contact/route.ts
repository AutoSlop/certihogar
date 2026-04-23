import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, whatsapp, correo, mensaje } = body;

    if (!nombre || !whatsapp || !correo) {
      return Response.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // In production, send email or save to database here.
    // For now, log the submission and return success.
    console.log("Nuevo contacto:", { nombre, whatsapp, correo, mensaje });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Error procesando solicitud" }, { status: 500 });
  }
}
