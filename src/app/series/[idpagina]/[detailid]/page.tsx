import getSeriesDetalhe from "@/app/server8";
import getVideoTrailerSerie from "@/app/server7";
import { BsYoutube } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
export default async function Home({ params }) {
    const data = await getSeriesDetalhe(params.detailid);
    const videosData = await getVideoTrailerSerie(params.detailid)
    const imagesIMDB = "https://image.tmdb.org/t/p/w500";

    return (
        <body className="bg-cor-1">

            <main className="flex flex-col bg-cor-1">
                <div className="flex flex-col justify-center items-center h-24 w-full bg-cor-4 shadow-md shadow-gray-800 border border-b-2 border-b-cor-2">
                    <h1 className="text-3xl text-cor-1">{data.name}</h1>
                    <h3 className="text-cor-1">{data.tagline}</h3>
                    <div className="absolute mr-[1720px]  h-9 w-16 flex items-center justify-center rounded-lg shadow-lg border border-cor-2 bg-cor-3 hover:scale-95 max-[1794px]:mr-[972px] max-[1068px]:mr-[621px]">
                        <a href={`/series/${params.idpagina}`} >
                            <button>Voltar</button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center hover:scale-105 transition-all">
                        <a href={`https://www.youtube.com/watch?v=${videosData.results[0]?.key}`}>
                            <div className="flex justify-center items-center">
                                <BsYoutube className="absolute text-6xl text-cor-3 z-10"></BsYoutube>
                                <div className="shadow-lg shadow-zinc-800 border border-cor-3 border-4 mt-[24px] rounded-lg">
                                    <img src={`${imagesIMDB}${data.poster_path}`} className="rounded-lg h-96 w-80 opacity-70"></img>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center h-96 w-full mt-[24px] mb-96">
                    <div className="flex flex-col items-center h-[720px] w-[1540px] bg-cor-2  p-9 rounded-lg gap-3">
                        <p className="text-base w-[1200px] mb-9 justify-center items-center flex">{data.overview == "" ? '' : `Sinopse: \n${data.overview}`}</p>
                        <h3> Criado por: {data.created_by[0] !== undefined ? data.created_by[0].name : 'Não informado'}</h3>
                        <h3> Popularidade: {data.popularity}</h3>
                        <h2> Nota: {data.vote_average}</h2>
                        <p> Gêneros: {data.genres.map((e) => (data.genres.indexOf(e) < data.genres.length - 1)? e.name+', ' : e.name+'.') }</p>
                        <h2> Data de Lançamento: {format(parseISO(data.first_air_date), "dd 'de' MMM 'de' yyyy", {
                            locale: ptBR,
                        })}</h2>
                        <h2>Temporadas: {data.number_of_seasons}.</h2>
                        <h2>Total de episódios: {data.number_of_episodes}.</h2>
                        <h2> Data do último episódio: {format(parseISO(data.last_episode_to_air.air_date), "dd 'de' MMM 'de' yyyy", {
                            locale: ptBR,
                        })}</h2>
                        <h2> Ultimo episódio lançado: {data.last_episode_to_air.name}</h2>
                        <h2> Produzido por: {data.production_companies[0] != null ? data.production_companies.map((e) => (data.production_companies.indexOf(e) < data.production_companies.length - 1)? e.name+', ' : e.name+'.') : 'Não informado'}</h2>
                        <h2> Site oficial:<a href={data.homepage !== '' ? data.homepage : ''} target={data.homepage !== '' ? '_blank' : ''} className="text-cor-1 hover:text-cor-4"> {data.homepage !== '' ? data.homepage : 'Não informado'}</a></h2>
                        <h2> País de origem: {data.production_countries[0] != null ? data.production_countries[0].name : 'Não informado' }</h2>
                    </div>
                </div>
            </main>
        </body>
    );
}