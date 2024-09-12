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
        <Image src={logo} alt="Logotipo da página" className="mb-4" />
      </Link>

      <ul className="flex gap-6 md:text-3xl text-xl">
        <li
          className={`${isActive(pathName, 'servicos')} transition-all duration-500 hover:text-yellow-400`}
        >
          <Link href="/servicos">Serviços</Link>
        </li>
        <li
          className={`${isActive(pathName, 'sobre')} transition-all duration-500 hover:text-yellow-400`}
        >
          <Link href="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/contato" className="flex flex-col">
            <span
              className={`text-right ${isActive(pathName, 'contato')} transition-all duration-500 hover:text-yellow-400`}
            >
              Contato
              <br />
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://wa.me//551199999999?text=Ol%C3%A1%20Sandro%2C%20acessei%20o%20seu%20site%20e%20
              quer%20fazer%20uma%20Tattoo%21%21"
          >
            <span className="hidden:md-flex text-xs text-zinc-400 font-extralight flex gap-1 items-center transition-all duration-500 hover:text-yellow-400">
              <FaWhatsapp />
              (+ 11 9999 9999)
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
