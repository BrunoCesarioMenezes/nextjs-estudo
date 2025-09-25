import prisma from "@/lib/prisma";

export async function GET(req: Request, {params}: {params: {id: string}}) {
    const user = await prisma.usuario.findUnique({where: {id: Number(params.id)}});
    return new Response(JSON.stringify(user), {status: 200});
}