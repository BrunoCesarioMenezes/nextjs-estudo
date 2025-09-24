import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 min-h-screen min-w-screen justify-center items-center">
      <h1 className="font-bold text-lg">Bem vindo ao site</h1>
      <div className="flex flex-col gap-2 px-4 py-2">
        <Link className="border-[1px] border-black px-2 py-1 bg-white text-black rounded-lg" href="/users/create">Criar usuário</Link>
        <Link className="border-[1px] border-black px-2 py-1 bg-white text-black rounded-lg" href="/users">Mostrar usuários</Link>
        <Link className="border-[1px] border-black px-2 py-1 bg-white text-black rounded-lg" href="/user/create">Criar usuário</Link>
      </div>
    </div>
  );
}
