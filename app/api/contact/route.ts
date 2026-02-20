import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(1, "El mensaje es requerido"),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "info@estudioduranteyasociados.com";

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada");
    return NextResponse.json(
      { error: "Configuración de email no disponible" },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la solicitud inválido" },
      { status: 400 },
    );
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message = Object.values(first).flat().join(" ") || "Datos inválidos";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(RESEND_API_KEY);

  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    ``,
    `Mensaje:`,
    message,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: "Estudio Contable Durante y Asociados <onboarding@resend.dev>",
    to: [TO_EMAIL],
    replyTo: email,
    subject: "Consulta desde la web",
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
