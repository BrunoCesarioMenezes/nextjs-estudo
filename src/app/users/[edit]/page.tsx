"use client";

import putHandleSubmit from "@/hooks/putHandleSubmit";
import prisma from "@/lib/prisma";

export default async function editUser(params: {params: {id: string}}) {
    const {msg, handleSubmit} = putHandleSubmit();
    const user = await prisma.usuario.findUnique({where: {id: Number(params.params.id)}});

    return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 self-center bg-white text-black rounded-lg p-4 shadow-lg w-fit h-fit">
        <form onSubmit={handleSubmit} action="/api/users/create" method="post" className="flex flex-col gap-4">
          <input defaultValue={user?.nome} type="text" name="nome" className="border-2 botder-black" placeholder="Nome" />
          <input defaultValue={user?.email} type="text" name="email" className="border-2 botder-black" placeholder="Email" />
          <button type="submit" className="bg-green-400 p-4">CRIAR</button>
        </form>
        {msg && <p className="text-gray-700 font-bold">{msg}</p>}
      </div>
    </div>
    );
}