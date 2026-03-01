import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-600">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/bg" className="flex-shrink-0">
              <img
                src="https://royal-plan.com/wp-content/uploads/2023/09/royal-plan-3D-logo.png"
                alt="Royalplan Consulting"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16 invert'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/bg"
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                } ${location.pathname === '/bg' ? (isScrolled ? 'border-b-2 border-blue-800' : 'border-b-2 border-white') : ''}`}
              >
                Начало
              </Link>
              <Link
                to="/bg/uslugi"
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                } ${location.pathname === '/bg/uslugi' ? (isScrolled ? 'border-b-2 border-blue-800' : 'border-b-2 border-white') : ''}`}
              >
                Услуги
              </Link>
              <Link
                to="/bg/za-nas"
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                } ${location.pathname === '/bg/za-nas' ? (isScrolled ? 'border-b-2 border-blue-800' : 'border-b-2 border-white') : ''}`}
              >
                За нас
              </Link>
              <Link
                to="/bg/kontakti"
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                } ${location.pathname === '/bg/kontakti' ? (isScrolled ? 'border-b-2 border-blue-800' : 'border-b-2 border-white') : ''}`}
              >
                Контакти
              </Link>

              {/* Language Switcher */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-2 text-sm font-bold uppercase tracking-wider ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  <img
                    src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/bg_BG.png"
                    alt="BG"
                    className="w-5 h-3.5 object-cover"
                  />
                  <span>BG</span>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-2 hidden group-hover:block border-t-4 border-blue-500">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <img
                      src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png"
                      alt="EN"
                      className="w-5 h-3.5 object-cover mr-2"
                    />
                    EN
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <img
                      src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/de_DE.png"
                      alt="DE"
                      className="w-5 h-3.5 object-cover mr-2"
                    />
                    DE
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <img
                      src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/tr_TR.png"
                      alt="TR"
                      className="w-5 h-3.5 object-cover mr-2"
                    />
                    TR
                  </a>
                </div>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/bg"
                className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 uppercase"
              >
                Начало
              </Link>
              <Link
                to="/bg/uslugi"
                className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 uppercase"
              >
                Услуги
              </Link>
              <Link
                to="/bg/za-nas"
                className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 uppercase"
              >
                За нас
              </Link>
              <Link
                to="/bg/kontakti"
                className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 uppercase"
              >
                Контакти
              </Link>
              <div className="px-3 py-3 flex space-x-4">
                <img src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/bg_BG.png" alt="BG" className="w-6 h-4 object-cover border border-gray-200" />
                <img src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png" alt="EN" className="w-6 h-4 object-cover border border-gray-200 opacity-50" />
                <img src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/de_DE.png" alt="DE" className="w-6 h-4 object-cover border border-gray-200 opacity-50" />
                <img src="https://royal-plan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/tr_TR.png" alt="TR" className="w-6 h-4 object-cover border border-gray-200 opacity-50" />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Newsletter & Social */}
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-2">Абонирайте се за нашия бюлетин</h3>
              <p className="text-gray-600 mb-6">Всичко ново и полезно от света на бизнеса</p>
              
              <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Електронна поща"
                    className="flex-grow px-4 py-3 bg-gray-100 border-none rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors whitespace-nowrap"
                  >
                    Абониране
                  </button>
                </div>
              </form>

              <div className="flex space-x-4">
                <a href="https://wa.me/4915750860687" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562494422509" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/royalplan_consulting/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@royalplan0" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/%E2%80%9Croyalplan-consulting-a-m-r-%E2%80%9D-ltd/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div className="bg-[#1a1a1a] text-white p-10 rounded-lg">
              <h2 className="text-3xl font-serif mb-6">Контакти</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-serif mb-1">Телефонен номер</h3>
                  <p><a href="tel:+4915750860687" className="text-blue-400 hover:underline">(+49) 157 508 606 87</a></p>
                </div>
                
                <div>
                  <h3 className="text-lg font-serif mb-1">Електронна поща</h3>
                  <p>info@royal-plan.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-serif mb-1">Адрес</h3>
                  <p>ул. Хан Тервел 1, гр. Велики Преслав</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0 space-x-2">
              <Link to="/bg/poveritelnost" className="hover:text-blue-600 transition-colors">Поверителност</Link>
              <span>|</span>
              <a href="/sitemap_index.xml" className="hover:text-blue-600 transition-colors">Карта на сайта</a>
            </div>
            <div>
              © Royalplan Consulting A.M.R. 2026 | All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-black/40 text-white rounded-md hover:bg-black/60 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
