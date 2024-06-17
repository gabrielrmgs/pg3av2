import React, { useEffect, useState } from "react";
import getSeries2024 from "@/app/server5";
import getGenerosSeries from "@/app/server6";

export default async function Page({ params }) {
  const data = await getSeries2024(params.idpagina);
  const genres = await getGenerosSeries();

  var test = genres.genres;
  const generos = [];


  const imagesIMDB = "https://image.tmdb.org/t/p/w500";


  return (
    <body className="bg-cor-4">
      <div className="bg-cor-4 w-full flex items-center justify-center">
        <nav className="flex flex-row h-20">
          <div className="container mx-auto flex flex-wrap items-center justify-between bg-cor-4">
            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="/filme/1" className=" text-gray-700 block pl-3 pr-4 py-2  md:p-0 rounded text-lg md:hover:text-blue-700" aria-current="page">Filmes</a>
                </li>
                <li>
                  <a href="/series/1" className="md:bg-transparent md:text-blue-700 text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Séries</a>
                </li>
                <li>
                  <a href="/equipe" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Equipe</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <main className="min-h-screen bg-cor-1 items-center justify-center">

        <div className=" w-full grid grid-cols-6 p-32 gap-6">
          {data.results.map((serie) => (
            <a key={serie.id} href={`/series/${params.idpagina}/${serie.id}`}>
              <div className="flex flex-col  h-[420px] w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all duration-300">
                <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1 mb-3">
                  <h1>Série</h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <ul className="flex flex-col justify-center items-center text-center p-3">
                    <img src={`${imagesIMDB}${serie.poster_path}`} className="rounded-lg shadow-md mb-5 h-52 w-48"></img>
                    <li>Título: {serie.name}</li>
                    <li>Gênero: {genres.genres.map((e) => {
                      if (e.id == serie.genre_ids[0]) {
                        return e.name
                      }
                    })}</li>
                    <li>Lançamento: {serie.first_air_date}</li>
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>

      </main>

      <footer className="flex w-full h-20 items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-9 mt-3">
          <hr className="w-24 border border-black"></hr>
          <button><a href={params.idpagina == 1 ? '/series/1' : `/series/${parseInt(params.idpagina) - 1}`}>Anterior</a></button>
          <hr className="w-3 border border-black"></hr>
          <button><a href={`/series/1`}>1</a></button>
          <button><a href={`/series/2`}>2</a></button>
          <button><a href={`/series/3`}>3</a></button>
          <hr className="w-3 border border-black"></hr>
          <button><a href={`/series/${parseInt(params.idpagina) + 1}`}>Próxima</a></button>
          <hr className="w-24 border border-black"></hr>
        </div>

        <div className="flex items-center justify-center mt-3">
          <h3>Página {params.idpagina}</h3>
        </div>
      </footer>
    </body>
  )
}