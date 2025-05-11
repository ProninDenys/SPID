// src/components/Header.jsx
import { Link } from 'react-scroll';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d2b]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#top" className="text-white text-xl font-bold hover:text-blue-400 transition">
          🚀 SpaceID
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-6">
          <Link to="mission" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            Mission
          </Link>
          <Link to="benefits" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            Benefits
          </Link>
          <Link to="tokenomics" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            Tokenomics
          </Link>
          <Link to="technology" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            Technology
          </Link>
          <Link to="partners" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            Partners
          </Link>
          <Link to="faq" smooth duration={500} className="text-white hover:text-blue-400 cursor-pointer">
            FAQ
          </Link>
          <Link to="cta" smooth duration={500} className="text-blue-400 font-semibold cursor-pointer">
            Buy Token
          </Link>
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={18} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTelegramPlane size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
