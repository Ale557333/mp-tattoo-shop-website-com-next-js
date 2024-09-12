import Image from 'next/image';
import { londrinaSolid } from './_lib/fonts';
import portrait from './_assets/portrait.png';

export default function Home() {
  return (
    <main className="relative flex-1 py-10 flex flex-col items-center justify-center text-center md:text-left md:items-start">
      <h1
        className={`absolute -z-10 text-[150px] sm:text-[200px] lg:text-[400px] text-zinc-800 -left-10 sm:-left-16 lg:-left-20 -top-0 leading-tight ${londrinaSolid.className} md:block hidden`}
      >
        Tatto
      </h1>

      <div className="font-black text-zinc-600 text-3xl sm:text-6xl md:text-7xl lg:text-8xl pt-16 sm:pt-24 md:pt-56 uppercase">
        <h2>Inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-yellow-400">Tatue-se</h2>
      </div>

      <Image
        width={350}
        className="absolute hidden md:block -right-16 -bottom-20 grayscale"
        src={portrait}
        alt="Retrato de Sandro Luz"
      />
    </main>
  );
}
