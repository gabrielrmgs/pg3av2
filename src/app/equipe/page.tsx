import Image from "next/image";
import hele from '../../../public/helena.png';
import marco from '../../../public/marc.png';
import gabriel from '../../../public/gabrielperf.jpg';

export default async function Page() {

    return (

        <main className="min-h-screen items-center justify-center">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="bg-cor-4 w-full flex items-center justify-center shadow-md shadow-gray-800 border border-b-2 border-b-cor-2">
                <nav className="flex flex-row h-20">
                    <div className="container mx-auto flex flex-wrap items-center justify-between bg-cor-4">
                        <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a href="/filme/1" className=" text-gray-700 block pl-3 pr-4 py-2  md:p-0 rounded text-lg md:hover:text-blue-700" aria-current="page">Filmes</a>
                                </li>
                                <li>
                                    <a href="/series/1" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-lg">Séries</a>
                                </li>
                                <li>
                                    <a href="/equipe" className="text-white md:bg-transparent md:text-blue-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2  md:p-0 text-lg">Equipe</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <button type="button" disabled className="text-cor-2">
                <svg className="animate-spin w-32 h-32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612" stroke="#DCD6F7" stroke-width="3.55556" stroke-linecap="round" />
                </svg>                            Carregando...
            </button> */}

            <section className="flex justify-center items-center flex-col">
                <div className=" bg-cor-2 rounded-lg p-9 mt-12 shadow-lg shadow-zinc-800">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <div className="bg-cor-3 p-4 rounded-3xl border border-cor-1">
                            <h1 className="text-cor-1 relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-cor-3 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-cor-2">Gabriel Remigio de Sá</h1>
                        </div>
                        <Image src={gabriel} width='180' height='180' className="rounded-full border border-cor-3 shadow-lg shadow-gray-800" alt="perfil-gabriel"></Image>
                        <div className="flex hover:scale-95 shadow-md shadow-cor-1 border border-cor-1 transition-all duration-200  rounded-xl p-2 bg-cor-3">
                            <span className="absolute flex h-3 w-3 mt-[-12px] ml-[138px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cor-1 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cor-1"></span>
                            </span>
                            <a href="https://gabrielrmgs.github.io/portfolio/" className="text-cor-1 text-lg font-mono font-bold">Link portfólio</a>
                        </div>
                    </div>
                </div>
                <div className="bg-cor-2 rounded-lg p-9 mt-12 shadow-lg shadow-zinc-800">
                    <div className="flex justify-center items-center">
                        <h1 className="bg-cor-3 p-2 rounded-3xl border border-cor-1 text-cor-1 text-lg">Participação de:</h1>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 mt-6">
                        <div className="flex flex-col items-center">
                            <Image src={marco} width='120' height='120' className="rounded-full border border-cor-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-cor-1" alt="perfilm"></Image>
                            <h2 className="mt-3">Marcos Gabriel</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image src={hele} width='120' height='120' className="rounded-full border border-cor-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-cor-1" alt="perfilh"></Image>
                            <h2 className="mt-3">Helena</h2>
                        </div>
                    </div>
                </div>
            </section>

        </main>


    )
}





