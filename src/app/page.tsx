import LinkComponent from "@/components/LinkComponent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-lg">Bem vindo ao CRUD</h1>
      <div className="flex flex-col gap-2 px-4 py-2">
        <LinkComponent href="/users/create">Criar usuário</LinkComponent>
        <LinkComponent href="/users">Mostrar usuários</LinkComponent>
      </div>
    </div>
  );
}
