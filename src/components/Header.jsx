import { IconBrandTwitter, IconBrandTelegram } from '@tabler/icons-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0d0d2b] to-[#141432] backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <a href="#top" className="text-white text-lg font-bold flex items-center gap-2">
          🚀 <span className="hover:text-blue-400 transition">SpaceID</span>
        </a>

        {/* Навигация */}
        <nav className="hidden md:flex gap-6 text-white font-medium text-sm">
          <a href="#mission" className="hover:text-blue-400 transition">Mission</a>
          <a href="#benefits" className="hover:text-blue-400 transition">Benefits</a>
          <a href="#tokenomics" className="hover:text-blue-400 transition">Tokenomics</a>
          <a href="#technology" className="hover:text-blue-400 transition">Technology</a>
          <a href="#partners" className="hover:text-blue-400 transition">Partners</a>
          <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
          <a href="#cta" className="text-blue-400 font-semibold hover:underline">Buy Token</a>
        </nav>

        {/* Соцсети */}
        <div className="flex gap-4 items-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <IconBrandTwitter size={20} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <IconBrandTelegram size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}