"use client";

import { useState } from "react";

export default function postHandleSubmit() {
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const res = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: formData.get("nome"),
            email: formData.get("email"),
          }),
        });

        if (res.ok) {
          setMsg("Usuário criado com sucesso!");
          form.reset();
        } else {
          setMsg("Erro ao criar usuário.");
        }
      }

      return {msg, handleSubmit};
}