import getFilmesDetalhe from "@/app/server3";
import getFilmesDetalheIngles from "@/app/datalhesIngles";
import getVideoTrailer from "@/app/server4";
import { BsYoutube } from "react-icons/bs";
import { format, parseISO} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
export default async function Home({ params }) {
    const data = await getFilmesDetalhe(params.detailid);
    const dataIng = await getFilmesDetalheIngles(params.detailid);
    const videosData = await getVideoTrailer(params.detailid)
    const imagesIMDB = "https://image.tmdb.org/t/p/w500";

    return (
        <body className="bg-cor-1">

            <main className="flex flex-col bg-cor-1">
                <div className="flex flex-col justify-center items-center h-24 w-full bg-cor-4 shadow-md shadow-gray-800 border border-b-2 border-b-cor-2">
                    <h1 className="text-3xl text-cor-1">{data.title}</h1>
                    <h3 className="text-cor-1">{data.tagline}</h3>
                    <div className="absolute mr-[1720px]  h-9 w-16 flex items-center justify-center rounded-lg shadow-lg border border-cor-2 bg-cor-3 hover:scale-95 max-[1794px]:mr-[972px] max-[1068px]:mr-[621px]">
                        <a href={`/filme/${params.idpagina}`} >
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
                                    <img src={data.poster_path !== null ? `${imagesIMDB}${data.poster_path}` : `${imagesIMDB}${data.backdrop_path}`} className="rounded-lg h-96 w-80 opacity-70"></img>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center h-96 w-full mt-[24px] mb-96">
                    <div className="flex flex-col items-center h-[720px] w-[1540px] bg-cor-2  p-9 rounded-lg gap-2">
                        <h1 className="font-mono text-lg font-bold text-cor-1 mb-3">Sinopse:</h1>
                        <p className=" w-[1200px] mb-16 justify-center items-center flex">{data.overview == '' ? dataIng.overview : data.overview}</p>
                        <h2> Popularidade: {data.popularity}</h2>
                        <h2> Nota: {data.vote_average}</h2>
                        <p> Gêneros: {data.genres.map((e) => (data.genres.indexOf(e) < data.genres.length - 1)? e.name+', ' : e.name+'.') }</p>
                        <h2> Data de Lançamento: {format(parseISO(data.release_date), "dd 'de' MMM 'de' yyyy", {
                            locale: ptBR,
                        })}</h2>
                        <h2> Produtores: {data.production_companies.map((e) => (data.production_companies.indexOf(e) < data.production_companies.length - 1)? e.name+', ' : e.name+'.')}</h2>
                        <h2> Bilheteria: {data.revenue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                        <h2> País de origem: {data.production_countries[0] !== undefined ? data.production_countries[0].name : 'Não informado'}</h2>
                        <h2> Tempo de duração: {data.runtime}</h2>
                        <h2> Custos de produção: {data.budget.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                    </div>
                </div>
            </main>
        </body>
    );
}