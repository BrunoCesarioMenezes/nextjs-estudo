"use client";
import Image from "next/image";
import { useState } from "react";
import usePostHandleSubmit from "@/hooks/usePostHandleSubmit";

export default function CreateUser() {
  const {msg, handleSubmit} = usePostHandleSubmit();

  return (
    <div className="flex min-w-screen justify-center">
      <div className="flex flex-col gap-2 self-center bg-white text-black rounded-lg p-4 shadow-lg w-fit h-fit">
        <form onSubmit={handleSubmit} action="/api/users/create" method="post" className="flex flex-col gap-4">
          <input type="text" name="nome" className="border-2 botder-black" placeholder="Nome" />
          <input type="text" name="email" className="border-2 botder-black" placeholder="Email" />
          <button type="submit" className="bg-green-400 p-4">CRIAR</button>
        </form>
        {msg && <p className="text-gray-700 font-bold">{msg}</p>}
      </div>
    </div>
  );
}
