import prisma from "@/lib/prisma";
import { redirect } from "next/dist/server/api-utils";

export async function POST(req: Request) {
  try {
    const {nome,email} = await req.json();

    if (!nome || !email) {
      return new Response("Nome and email are required", { status: 400 });
    }

    if(email.indexOf('@') === -1){
      return new Response("Email inválido", { status: 400 });
    }

    const newUser = await prisma.usuario.create({
      data: { nome, email },
    });

    return new Response(JSON.stringify(newUser),
    { status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}