import Image from 'next/image';
import portrait from '../_assets/portrait.png';
import { islandMoments } from '../_lib/fonts';

export default function Contato() {
  return (
    <main className="relative flex-1 px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl font-black mt-12 md:text-left">
        Prazer, sou <span className="text-yellow-400">Sandro Luz</span>
      </h1>
      <section className='mt-8 max-w-full md:max-w-sm lg:max-w-3xl space-y-6 text-zinc-400 font-light'>
      <p>
        Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se
        imprime na pele. Com mais de 10 anos de experiência no mundo da
        tatuagem, dedico-me a transformar visões e emoções em arte corporal que
        expressa quem você é e o que você ama.
      </p>

      <p>
        Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
        atentamente os desejos e as histórias de meus clientes para que cada
        peça seja única e pessoal. Especializo-me em vários estilos, desde o
        delicado traço fino até composições mais robustas e coloridas,
        garantindo que cada design não só atenda, mas supere as expectativas.
      </p>

      <p>
        Além da dedicação à arte, a segurança e o conforto são prioridades no
        meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
        qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança,
        garantindo uma experiência segura e confortável para todos.
      </p>

      <p>
        Visite meu estúdio e veja como a arte pode se manifestar em sua pele.
        Estou aqui para ajudá-lo a contar sua história de uma maneira única e
        eterna. Agende sua consulta e vamos juntos criar algo extraordinário!
      </p>
      </section>
      <p className={`${islandMoments.className} text-4xl md:text-6xl mt-6 text-center md:text-left`}>Sandro Luz</p>
      <Image
        width={350}
        className="hidden md:block absolute -right-16 -bottom-20"
        src={portrait}
        alt="Retrato de Sandro Luz"
      />
    </main>
  );
}
