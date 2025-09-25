"use client";

import putHandleSubmit from "@/hooks/putHandleSubmit";
import { useEffect, useState, useContext } from "react";

export default function editUser({params} : {params: {id: string}}) {
    const {msg, handleSubmit} = putHandleSubmit();
    const [user, setUser] = useState<{id: Number; nome : string; email : string} | null>(null);
    useEffect(() => {
        fetch("/api/users/" + params.id,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "force-cache"
        })
        .then(res => res.json())
        .then(data => setUser(data));
    }, [params.id]);

    return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 self-center bg-white text-black rounded-lg p-4 shadow-lg w-fit h-fit">
        {user && (
          <form onSubmit={handleSubmit} action={"/api/users/edit/" + user?.id} method="post" className="flex flex-col gap-4">
            <input defaultValue={user?.nome} type="text" name="nome" className="border-2 botder-black" placeholder="Nome" />
            <input defaultValue={user?.email} type="text" name="email" className="border-2 botder-black" placeholder="Email" />
            <button type="submit" className="bg-orange-400 p-4">SALVAR</button>
          </form>
        )}
        {msg && <p className="text-gray-700 font-bold">{msg}</p>}
      </div>
    </div>
    );
}