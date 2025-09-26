import prisma from "@/lib/prisma";

export async function GET(req: Request, context: unknown) {
  const { params } = context as { params: { id: string } };
  const id = Number(params.id);

  const user = await prisma.usuario.findUnique({
    where: { id },
  });

  return new Response(JSON.stringify(user), { status: 200 });
}
