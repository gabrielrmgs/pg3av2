import React, { useEffect, useState } from "react";
import getFilmes2024 from "@/app/server";
import getGeneros from "@/app/server2";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export default async function Page({ params }) {
  //chamando funcoes de requisiçao e guardando resposta em variaveis
  const data = await getFilmes2024(params.idpagina);
  const genres = await getGeneros();

  var test = genres.genres;
  const generos = [];


  const imagesIMDB = "https://image.tmdb.org/t/p/w500";


  return (
    <main className="bg-cor-1 items-center justify-center">
      <div className="bg-cor-4 w-full flex items-center justify-center shadow-md shadow-gray-800 border border-b-2 border-b-cor-2">
        <nav className="flex flex-row h-20">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="/filme/1" className="md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded text-lg" aria-current="page">Filmes</a>
                </li>
                <li>
                  <a href="/series/1" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Séries</a>
                </li>
                <li>
                  <a href="/equipe" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Equipe</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      <div className=" w-full grid grid-cols-6 p-32 gap-6 max-[1734px]:grid-cols-5 max-[1520px]:grid-cols-4 max-[1240px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {data.results.map((flm) => (
          <a key={flm.id} href={`/filme/${params.idpagina}/${flm.id}`}>
            <div className="flex flex-col  h-[420px] w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all duration-300">
              <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1 mb-3">
                <h1>Filme</h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col justify-center items-center text-center p-3">
                  <img src={`${imagesIMDB}${flm.poster_path}`} className="rounded-lg shadow-md mb-5 h-52 w-48"></img>
                  <li>Título: {flm.title}</li>
                  <li>Gênero: {genres.genres.map((e) => {
                    if (e.id == flm.genre_ids[0]) {
                      return e.name
                    }
                  })}</li>
                  <li>Lançamento: {format(parseISO(flm.release_date), "dd 'de' MMM 'de' yyyy", {
                    locale: ptBR,
                  })}</li>
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>


      <footer className="flex w-full h-20 items-center justify-center flex-col shadow-md shadow-gray-800 border border-t-2 border-t-cor-2 bg-cor-4">
        <div className="flex items-center justify-center gap-9 mt-3">
          <hr className="w-24 border border-cor-1"></hr>
          <button><a href={params.idpagina == 1 ? '/filme/1' : `/filme/${parseInt(params.idpagina) - 1}`} className="text-cor-1 font-bold font-mono text-lg">Anterior</a></button>
          <hr className="w-3 border border-cor-1"></hr>
          <button><a href={`/filme/1`} className="text-cor-1 font-bold font-mono text-lg">1</a></button>
          <button><a href={`/filme/2`} className="text-cor-1 font-bold font-mono text-lg">2</a></button>
          <button><a href={`/filme/3`} className="text-cor-1 font-bold font-mono text-lg">3</a></button>
          <hr className="w-3 border border-cor-1"></hr>
          <button><a href={`/filme/${parseInt(params.idpagina) + 1}`} className="text-cor-1 font-bold font-mono text-lg">Próxima</a></button>
          <hr className="w-24 border border-cor-1"></hr>
        </div>

        <div className="flex items-center justify-center mt-1">
          <h3 className="text-cor-1 font-bold font-mono text-lg">Página {params.idpagina}</h3>
        </div>
      </footer>
    </main>
  )
}

