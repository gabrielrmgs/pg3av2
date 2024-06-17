import Image from "next/image";
import { redirect } from "next/navigation";
import hele from '../../../public/helena.png';
import marco from '../../../public/marc.png';
import gabriel from '../../../public/gabriel.jpg';
export default function Home() {
    return (
        <body className="bg-cor-1">
            <div className="flex flex-row items-center justify-center gap-6 mt-20">
                <Image src={gabriel} width='90' height='90' className="rounded-full border border-cor-3 hover:scale-105"></Image>
                <Image src={marco} width='90' height='90' className="rounded-full border border-cor-3 hover:scale-105"></Image>
                <Image src={hele} width='90' height='90' className="rounded-full border border-cor-3 hover:scale-105"></Image>
            </div>
        </body>
    );
}
