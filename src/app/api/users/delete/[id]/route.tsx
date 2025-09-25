import prisma from "@/lib/prisma";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.usuario.delete({
            where: {
                id: Number(params.id),
            },
        });
        return new Response("Usuário deletado com sucesso", { status: 200 });
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return new Response("Erro ao deletar usuário", { status: 500 });
    }
}
