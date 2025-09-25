import { useEffect, useState } from "react";

export default function DeleteModal({id} : {id: string}) {
    async function handleDelete(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("/api/users/delete/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if(res.ok){
            const modal = document.getElementById(id);
            if(modal){
                modal.style.display = "none";
            }
            window.location.reload();
        } else {
            alert("Erro ao deletar usuário");
        }
    }

    return (
        <form className="bg-white border-2 border-black" style={{display: "none",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            padding: "20px",
        }} id={id}>
            <h1 className="text-red-500 font-bold">Excluir usuário</h1>
            <p>Tem certeza que deseja deletar esse usuário?</p>
            <div className="flex gap-4 justify-center mt-4 text-white font-bold">
                <button onClick={handleDelete} className="bg-red-500 py-1 px-2">Excluir</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    const modal = document.getElementById(id);
                    if(modal){
                        modal.style.display = "none";
                    }
                }} className="bg-gray-400 py-1 px-2">Cancelar</button>
            </div>
        </form>
    )
}