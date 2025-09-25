"use client"

import LinkComponent from "@/components/LinkComponent";
import Link from "next/link";
import { env } from "process";
import { useEffect, useState } from "react";

export default function showUsers(){
    // const users = await fetch( `${process.env.NEXT_PUBLIC_DOMAIN + "api/users"}`, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //     cache: "no-store"
    // });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);


    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-lg mb-4">Lista de Usuários</h1>
            <ul className="flex flex-col gap-2">
                {users && users.map((user: {id: number, nome: string, email: string}) => (
                    <li key={user.id} className="text-center border-[1px] border-black px-2 py-1 bg-white text-black rounded-lg">
                        {user.nome} - {user.email}
                        <div className="flex justify-center gap-2">
                            <LinkComponent className="text-orange-500 font-bold" href={"users/edit/" + user.id}>Editar</LinkComponent>
                            <LinkComponent className="text-red-500 font-bold" href="/">Excluir</LinkComponent>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}