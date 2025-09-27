export default function FormContainer({type, action, handleSubmit, user, msg}: {type : 'create' | 'edit' ,action: string, handleSubmit: {(e: React.FormEvent<HTMLFormElement>) : Promise<void>}, user: {id: number; nome: string; email: string} | null, msg: string | null}) {
    return (
        <div className="flex min-w-screen justify-center">
      <div className="flex flex-col gap-2 self-center bg-white text-black shadow-lg shadow-neutral-950 p-4 w-fit h-fit">
        <form
          onSubmit={handleSubmit}
          action={user ? action + user.id : action}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            defaultValue={user?.nome}
            type="text"
            name="nome"
            className="border-2 border-black p-2 rounded"
            placeholder="Nome"
          />
          <input
            defaultValue={user?.email}
            type="email"
            name="email"
            className="border-2 border-black p-2 rounded"
            placeholder="Email"
          />
          {type === 'edit' && (
            <button type="submit" className="bg-orange-400 p-4 rounded text-white font-bold">
                SALVAR
            </button>
          )}
          {type === 'create' && (
            <button type="submit" className="bg-green-400 p-4 rounded text-white font-bold">
                SALVAR
            </button>
          )}
        </form>
        {msg && <p className="text-gray-700 font-bold">{msg}</p>}
      </div>
    </div>
    );
}