"use client";

import { useState } from "react";

export default function usePutHandleSubmit() {
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const res = await fetch(form.action, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: formData.get("nome"),
            email: formData.get("email"),
          }),
        });

        if (res.ok) {
          setMsg("Usuário editado com sucesso!");
          form.reset();
        } else {
          setMsg("Erro ao editar usuário.");
        }

        (form.elements.namedItem("nome") as HTMLInputElement).value = formData.get("nome") as string;
        (form.elements.namedItem("email") as HTMLInputElement).value = formData.get("email") as string;
      }

      return {msg, handleSubmit};
}