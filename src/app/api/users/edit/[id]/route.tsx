import prisma from "@/lib/prisma";

export async function PUT(req : Request, context : unknown) {
    const { params } = context as { params: { id: string } };
    const id = Number(params.id);
    const body = await req.json();
    const {nome, email} = body;

    if (!nome || !email) {
        return new Response("Nome e email são obrigatórios.", {status: 400});
    }

    try {
        const updatedUser = await prisma.usuario.update({
            where: {id: id},
            data: {nome, email},
        });
        return new Response(JSON.stringify(updatedUser), {status: 200});
    } catch (error) {
        return new Response("Erro ao atualizar usuário.", {status: 500});
    }
}