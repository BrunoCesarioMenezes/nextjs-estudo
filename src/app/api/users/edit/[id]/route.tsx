import prisma from "@/lib/prisma";

export async function PUT(req : Request, {params}: {params: {id: string}}) {
    const body = await req.json();
    const {nome, email} = body;

    if (!nome || !email) {
        return new Response("Nome e email são obrigatórios.", {status: 400});
    }

    try {
        const updatedUser = await prisma.usuario.update({
            where: {id: Number(params.id)},
            data: {nome, email},
        });
        return new Response(JSON.stringify(updatedUser), {status: 200});
    } catch (error) {
        return new Response("Erro ao atualizar usuário.", {status: 500});
    }
}