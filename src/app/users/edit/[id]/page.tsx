"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import usePutHandleSubmit from "@/hooks/usePutHandleSubmit";
import FormContainer from "@/components/FormContainer";

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
    <FormContainer type="edit" action="/api/users/edit/" handleSubmit={handleSubmit} user={user} msg={msg}></FormContainer>
  );
}
