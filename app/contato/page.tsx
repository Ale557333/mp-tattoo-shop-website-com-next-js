import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import tattooImage from "../_assets/tattoo.png";

export default function Contato() {
  return (
    <main className="flex gap-1 justify-between px-4 md:px-8 lg:px-16 py-10">
      <section className="min-w-96">
        <h1 className="text-3xl font-black mt-12">
          Entre em <span className="text-yellow-400">Contato</span>
        </h1>
        <p className="mt-10 font-light text-zinc-400">
          Clique no botão abaixo e envie uma mensagem. <br />
          Vamos conversar!
        </p>
        <Link 
          target='_blank' 
          href="https://wa.me//551199999999?text=Ol%C3%A1%20Sandro%2C%20acessei%20o%20seu%20site%20e%20quer%
          20fazer%20uma%20Tattoo%21%21"
        >
          <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10">
            <FaWhatsapp className="w-8 h-8" />
            <div>
              <p>Enviar Whatsapp</p>
              <p className="text-zinc-500 text-xs">(+ 11 9999 9999)</p>
            </div>
          </button>
        </Link>
      </section>
      <Image 
        className="hidden lg:block" 
        width="600" 
        src={tattooImage} 
        alt="Sandro Luz fazendo uma tatuagem" />
    </main>
  );
}
