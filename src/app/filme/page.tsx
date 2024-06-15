import { stringify } from "querystring";

//Funçao para requisitar a API informação sobre os filmes
async function getData() {

    var keysApi = new Headers();
    keysApi.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTQ5MTVjZmVjZmRmYTcyYjgxOTE3NWFlMWZmMTgzNCIsInN1YiI6IjY2NmRhMWY1OGVkNmYwODQ3NmFmYmZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfOocwir3_s3yDYPvOk5InXprTkvJ_tuk2ZJQZlxT_c')
    keysApi.append('accept', 'application/json')

    var cabecalho = {
        method: 'GET',
        headers: keysApi,
    }


    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc', cabecalho)
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


    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', cabecalho)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}



export default async function Page() {

    //chamando funcos de requisiçao e guardando resposta em variaveis
    const data = await getData();
    const genres = await getGenres();
    console.log(data)
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
        <main className="flex min-h-screen bg-zinc-900 items-center justify-center gap-6">
            <div className="flex h-48 w-60 bg-rose-300 rounded-lg">
                <div className="bg-zinc-200 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-black">
                    <h1>Filmes</h1>
                </div>

                <ul className="flex flex-col absolute mt-12 ml-6">
                    <img src={`${imagesIMDB}${data.results[0].poster_path}`}></img>
                    <li>Title: {data.results[0].title}</li>
                    <li>Gender: {getGenero(data.results[0].genre_ids[0])}</li>
                    <li>Release Date: {data.results[0].release_date}</li>
                </ul>

                <div className="flex bg-slate-500 h-6 w-24 mt-40 ml-32 absolute items-center justify-center rounded-xl shadow-md hover:scale-105 border border-red-400">
                    <button><a href="filme/detalhes">Mais...</a></button>
                </div>
            </div>
            <div className="flex h-48 w-60 bg-rose-300 rounded-lg">
                <div className="bg-zinc-200 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-black">
                    <h1>Filmes</h1>
                </div>

                <ul className="flex flex-col absolute mt-12 ml-6">
                    <li>Title: {data.results[1].title}</li>
                    <li>Gender: {getGenero(data.results[1].genre_ids[0])}</li>
                    <li>Release Date: {data.results[1].release_date}</li>

                </ul>

                <div className="flex bg-slate-500 h-6 w-24 mt-40 ml-32 absolute items-center justify-center rounded-xl shadow-md hover:scale-105 border border-red-400">
                    <button>Salvar</button>
                </div>
            </div>
            <div className="flex h-48 w-60 bg-rose-300 rounded-lg">
                <div className="bg-zinc-200 flex w-full h-9 justify-center items-center rounded-t-lg border-b border-b-black">
                    <h1>Filmes</h1>
                </div>

                <ul className="flex flex-col absolute mt-12 ml-6">
                    <li>Title: {data.results[2].title}</li>
                    <li>Gender: {getGenero(data.results[2].genre_ids[0])}</li>
                    <li>Release Date: {data.results[2].release_date}</li>

                </ul>

                <div className="flex bg-slate-500 h-6 w-24 mt-40 ml-32 absolute items-center justify-center rounded-xl shadow-md hover:scale-105 border border-red-400">
                    <button>Salvar</button>
                </div>
            </div>
        </main>
    )
}

