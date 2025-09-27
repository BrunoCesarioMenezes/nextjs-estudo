import prisma from "@/lib/prisma";

export async function DELETE(req: Request, context: unknown) {
    const { params } = context as { params: { id: string } };
    const id = params.id;
    try {
        await prisma.usuario.delete({
            where: {
                id: id,
            },
        });
        return new Response("Usuário deletado com sucesso", { status: 200 });
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return new Response("Erro ao deletar usuário", { status: 500 });
    }
}
