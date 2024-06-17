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
                <div className="flex flex-col justify-center items-center h-24 w-full bg-cor-4">
                    <h1 className="text-3xl">{data.name}</h1>
                    <h3>{data.tagline}</h3>
                    <div className="absolute mr-[2000px]  h-9 w-16 flex items-center justify-center rounded-lg shadow-lg border border-cor-2 bg-cor-3 hover:scale-95">
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
                    <div className="flex flex-col items-center h-[720px] w-[1540px] bg-cor-2  p-9 rounded-lg">
                        <p className="text-base columns-1">{data.overview}</p>
                        <h3> Popularidade: {data.popularity}</h3>
                        <h2> Nota: {data.vote_average}</h2>
                        <p> Gêneros: {data.genres.map((e) => (data.genres.indexOf(e) < data.genres.length - 1)? e.name+', ' : e.name+'.') }</p>
                        <h2> Data de Lançamento: {format(parseISO(data.first_air_date), "dd 'de' MMM 'de' yyyy", {
                            locale: ptBR,
                        })}</h2>
                        <h2> Produzido por: {data.production_companies.map((e) => (data.production_companies.indexOf(e) < data.production_companies.length - 1)? e.name+', ' : e.name+'.')}</h2>
                    </div>
                </div>
            </main>
        </body>
    );
}