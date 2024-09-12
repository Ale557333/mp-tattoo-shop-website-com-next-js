import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8 text-xs text-zinc-500 -z-30 px-4 md:px-8">
      <div className="container flex gap-2 items-center">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p className="flex items-center gap-1">
          <FaWhatsapp /> (+55 11) 9999 9999
        </p>
      </div>
    </footer>
  );
}
