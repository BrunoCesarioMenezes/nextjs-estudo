import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const users = await prisma.usuario.findMany();
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    catch (error) {
        return new Response("Erro ao buscar usuários", { status: 500 });
    }
}