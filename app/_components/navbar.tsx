'use client';

import Image from 'next/image';
import logo from '@/app/_assets/logo.svg';
import { londrinaSolid } from '../_lib/fonts';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathName = usePathname();

  const isActive = (currentPath: string, pathName: string) => {
    if (currentPath.includes(pathName)) {
      return 'underline';
    }
  };

  return (
    <nav
      className={`container flex flex-col md:flex-row justify-between py-8 z-10 ${londrinaSolid.className} px-4 md:px-8`}
    >
      <Link href="/">
        <Image 
          src={logo} 
          alt="Logotipo da página"
          className='mb-4'
        />
      </Link>

      <ul className="flex gap-6 md:text-3xl text-xl">
        <li className={`${isActive(pathName, 'servicos')}`}>
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className={`${isActive(pathName, 'sobre')}`}>
          <Link href="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/contato" className='flex flex-col'>
            <span className={`text-right ${isActive(pathName, 'contato')}`}>
              Contato
              <br />
            </span>
            <span className="hidden:md-flex text-xs text-zinc-400 font-extralight flex gap-1 items-center">
              <FaWhatsapp />
              (+ 11 9999 9999)
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
