"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import usePutHandleSubmit from "@/hooks/usePutHandleSubmit";

export default function EditUser() {
  const params = useParams();
  const id = params.id;
  const { msg, handleSubmit } = usePutHandleSubmit();
  const [user, setUser] = useState<{ id: number; nome: string; email: string } | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch("/api/users/" + id, { cache: "no-store" })
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="flex min-w-screen justify-center">
      <div className="flex flex-col gap-2 self-center bg-white text-black rounded-lg p-4 shadow-lg w-fit h-fit">
        <form
          onSubmit={handleSubmit}
          action={"/api/users/edit/" + user.id}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            defaultValue={user.nome}
            type="text"
            name="nome"
            className="border-2 border-black p-2 rounded"
            placeholder="Nome"
          />
          <input
            defaultValue={user.email}
            type="text"
            name="email"
            className="border-2 border-black p-2 rounded"
            placeholder="Email"
          />
          <button type="submit" className="bg-orange-400 p-4 rounded text-white font-bold">
            SALVAR
          </button>
        </form>
        {msg && <p className="text-gray-700 font-bold">{msg}</p>}
      </div>
    </div>
  );
}
