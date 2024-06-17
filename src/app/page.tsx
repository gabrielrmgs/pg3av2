import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-900 items-center justify-center">
      <div className="flex h-48 w-60 bg-rose-300 rounded-lg">
        <div className="bg-zinc-200 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-black">
          <h1>Filmes</h1>
        </div>

        <ul className="flex flex-col absolute mt-12 ml-6">
          <li>1.</li>
          <li>2.</li>
          <li>3.</li>
        </ul>

        <div className="flex bg-slate-500 h-6 w-24 mt-40 ml-32 absolute items-center justify-center rounded-xl shadow-md hover:scale-105 border border-red-400">
          <button>Salvar</button>
        </div>
      </div>
    </main>
  );
}
