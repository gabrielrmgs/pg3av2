import App from "../../../../Components/pagination";

//Funçao para requisitar a API informação sobre os filmes
async function getData(paginaFilme) {

  var keysApi = new Headers();
  keysApi.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTQ5MTVjZmVjZmRmYTcyYjgxOTE3NWFlMWZmMTgzNCIsInN1YiI6IjY2NmRhMWY1OGVkNmYwODQ3NmFmYmZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfOocwir3_s3yDYPvOk5InXprTkvJ_tuk2ZJQZlxT_c')
  keysApi.append('accept', 'application/json')

  var cabecalho = {
    method: 'GET',
    headers: keysApi,
  }


  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${paginaFilme}&primary_release_year=2024&sort_by=popularity.desc`, cabecalho)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

//Função para requisitar a API informação sobre os generos dos filmes e seus IDs
async function getGenres() {

  var keysApi = new Headers();
  keysApi.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTQ5MTVjZmVjZmRmYTcyYjgxOTE3NWFlMWZmMTgzNCIsInN1YiI6IjY2NmRhMWY1OGVkNmYwODQ3NmFmYmZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfOocwir3_s3yDYPvOk5InXprTkvJ_tuk2ZJQZlxT_c')
  keysApi.append('accept', 'application/json')

  var cabecalho = {
    method: 'GET',
    headers: keysApi,
  }


  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt', cabecalho)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Page({ params }) {

  //chamando funcos de requisiçao e guardando resposta em variaveis
  const data = await getData(params.idpagina);
  const genres = await getGenres();
  var test = genres.genres;
  const generos = [];

  let count = -1;
  function getGenero(num) {
    test.forEach(el => el.id == num ? generos.push(el) : console.log())
    count += 1;
    return generos[count].name
  }

  const imagesIMDB = "https://image.tmdb.org/t/p/w500";
  return (
    <body className="bg-cor-4">
      <div className="max-w-2xl mx-auto">

        <nav className="px-2 mb-4 mt-3 rounded-lg pr-0">
          <div className="container mx-auto flex flex-wrap items-center justify-between">

            <div className="flex md:order-2">
              <div className="relative mr-3 md:mr-0 hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="email-adress-icon" className="bg-cor-4 text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2" placeholder="Pesquisar gênero..." />
              </div>
              <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="/filme/1" className="md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded text-lg" aria-current="page">Filmes</a>
                </li>
                <li>
                  <a href="/series/1" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Séries</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Equipe</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      </div>

      <main className="grid grid-cols-6 min-h-screen bg-cor-1 items-center justify-center p-36 gap-9">
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[0].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[0].title}</li>
            <li>Gênero: {getGenero(data.results[0].genre_ids[0])}</li>
            <li>Lançamento: {data.results[0].release_date}</li>
          </ul>
        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[1].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[1].title}</li>
            <li>Gênero: {getGenero(data.results[1].genre_ids[0])}</li>
            <li>Lançamento: {data.results[1].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[2].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[2].title}</li>
            <li>Gênero: {getGenero(data.results[2].genre_ids[0])}</li>
            <li>Lançamento: {data.results[2].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[3].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[3].title}</li>
            <li>Gênero: {getGenero(data.results[3].genre_ids[0])}</li>
            <li>Lançamento: {data.results[3].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[4].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[4].title}</li>
            <li>Gênero: {getGenero(data.results[4].genre_ids[0])}</li>
            <li>Lançamento: {data.results[4].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[5].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[5].title}</li>
            <li>Gênero: {getGenero(data.results[5].genre_ids[0])}</li>
            <li>Lançamento: {data.results[5].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[6].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[6].title}</li>
            <li>Gênero: {getGenero(data.results[6].genre_ids[0])}</li>
            <li>Lançamento: {data.results[6].release_date}</li>
          </ul>
        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[7].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[7].title}</li>
            <li>Gênero: {getGenero(data.results[7].genre_ids[0])}</li>
            <li>Lançamento: {data.results[7].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[8].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[8].title}</li>
            <li>Gênero: {getGenero(data.results[8].genre_ids[0])}</li>
            <li>Lançamento: {data.results[8].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[9].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[9].title}</li>
            <li>Gênero: {getGenero(data.results[9].genre_ids[0])}</li>
            <li>Lançamento: {data.results[9].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[10].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[10].title}</li>
            <li>Gênero: {getGenero(data.results[10].genre_ids[0])}</li>
            <li>Lançamento: {data.results[10].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[11].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[11].title}</li>
            <li>Gênero: {getGenero(data.results[11].genre_ids[0])}</li>
            <li>Lançamento: {data.results[11].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[12].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[12].title}</li>
            <li>Gênero: {getGenero(data.results[12].genre_ids[0])}</li>
            <li>Lançamento: {data.results[12].release_date}</li>
          </ul>
        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[13].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[13].title}</li>
            <li>Gênero: {getGenero(data.results[13].genre_ids[0])}</li>
            <li>Lançamento: {data.results[13].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[14].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[14].title}</li>
            <li>Gênero: {getGenero(data.results[14].genre_ids[0])}</li>
            <li>Lançamento: {data.results[14].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[15].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[15].title}</li>
            <li>Gênero: {getGenero(data.results[15].genre_ids[0])}</li>
            <li>Lançamento: {data.results[15].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[16].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[16].title}</li>
            <li>Gênero: {getGenero(data.results[16].genre_ids[0])}</li>
            <li>Lançamento: {data.results[16].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all flex-col flex-wrap scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[17].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[17].title}</li>
            <li>Gênero: {getGenero(data.results[17].genre_ids[0])}</li>
            <li>Lançamento: {data.results[17].release_date}</li>

          </ul>


        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[18].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[18].title}</li>
            <li>Gênero: {getGenero(data.results[18].genre_ids[0])}</li>
            <li>Lançamento: {data.results[18].release_date}</li>
          </ul>
        </div>
        <div className="flex h-96 w-60 bg-cor-3 rounded-lg hover:scale-105 transition-all scale-100">
          <div className="bg-cor-2 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-cor-1">
            <h1>Filme</h1>
          </div>

          <ul className="flex flex-col absolute mt-12 ml-6">
            <img src={`${imagesIMDB}${data.results[19].poster_path}`} className="w-44 h-52 rounded-lg shadow-md mb-3"></img>
            <li>Título: {data.results[19].title}</li>
            <li>Gênero: {getGenero(data.results[19].genre_ids[0])}</li>
            <li>Lançamento: {data.results[19].release_date}</li>

          </ul>


        </div>

      </main>

      <footer>
        <div className="flex items-center justify-center gap-9 m-3">
          <hr className="w-24 border border-black"></hr>
          <button><a href={params.idpagina == 1? '/filme/1' : `/filme/${parseInt(params.idpagina)-1}`}>Anterior</a></button>
          <hr className="w-3 border border-black"></hr>
          <button><a href={`/filme/1`}>1</a></button>
          <button><a href={`/filme/2`}>2</a></button>
          <button><a href={`/filme/3}`}>3</a></button>
          <hr className="w-3 border border-black"></hr>
          <button><a href={`/filme/${parseInt(params.idpagina)+1}`}>Próxima</a></button>
          <hr className="w-24 border border-black"></hr>
        </div>
      </footer>
    </body>
  )
}

