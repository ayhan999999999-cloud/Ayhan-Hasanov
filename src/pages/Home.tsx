import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Tags, Factory, Handshake, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const accordionData = [
    {
      title: 'Как ние ще Ви помогнем',
      content: (
        <>
          <p className="mb-4">
            Нашият екип от експерти в Роялплан Консултинг А.М.Р. ЕООД предоставя цялостни решения в областта на международния проектен мениджмънт и документация за широк спектър от индустрии. Ние разбираме специфичните предизвикателства на всеки бизнес и създаваме стратегии, които гарантират постигане на вашите цели. Независимо дали сте в сферата на инженеринга, производството, търговията на едро, или услугите, ние сме тук, за да оптимизираме вашите процеси и да ви помогнем да реализирате успешни проекти.
          </p>
          <p>
            Свържете се с нас днес, за да обсъдим как можем да ви помогнем да изведете бизнеса си на следващото ниво. Ние сме готови да бъдем вашият партньор в успеха!
          </p>
        </>
      ),
    },
    {
      title: 'Експертиза в различни отрасли',
      content: (
        <p>
          Нашият опитен екип от консултанти може да се похвали с богат опит в широк спектър от индустрии, което гарантира, че разбираме уникалните предизвикателства, пред които е изправен Вашият бизнес.
        </p>
      ),
    },
    {
      title: 'Доверието е нашата основа',
      content: (
        <p>
          Доверието не е просто модерна дума за нас; това е крайъгълният камък на нашата работа. Разбираме, че Вашият бизнес е нещо повече от числа и диаграми; това е Вашата визия, Вашите мечти и Вашето наследство. Ние го третираме като такъв.
        </p>
      ),
    },
    {
      title: 'Глобална перспектива, локални стратегии',
      content: (
        <p>
          Нашият глобален обхват ни дава достъп до различна информация и най-добри практики. Ние обаче съчетаваме това с дълбоко разбиране на Вашия местен пазар, като гарантираме стратегии, които работят в реалния свят.
        </p>
      ),
    },
    {
      title: 'Подход, ориентиран към резултатите',
      content: (
        <p>
          Ние не сме просто съветници; ние сме партньори във Вашия успех. Нашият ориентиран към резултатите подход означава, че Вашите цели стават наши и ние работим неуморно, за да Ви помогнем да ги постигнете.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://royal-plan.com/wp-content/uploads/2023/11/royal-plan.com_home_hero_img1.webp)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Animated Gradient Backgrounds */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute -inset-[50%] opacity-30 animate-slide bg-gradient-to-br from-[#4a4e69] via-[#4a4e69] to-[#c9ada7] to-50%" />
          <div className="absolute -inset-[50%] opacity-30 animate-slide-reverse bg-gradient-to-br from-[#4a4e69] via-[#4a4e69] to-[#c9ada7] to-50%" style={{ animationDuration: '4s' }} />
          <div className="absolute -inset-[50%] opacity-30 animate-slide bg-gradient-to-br from-[#4a4e69] via-[#4a4e69] to-[#c9ada7] to-50%" style={{ animationDuration: '5s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 bg-white/15 backdrop-blur-sm rounded-2xl shadow-[0_33px_40px_-10px_rgba(0,0,0,0.2)] p-[10vmin] text-center">
          <h1 className="font-serif text-[clamp(3.5rem,3.2rem+1.5vw,5rem)] leading-tight font-bold text-[#22223b]">
            Royalplan Consulting
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Услуги</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Водещи в международния проектен мениджмънт и документацията. Вашият партньор за успешни проекти.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <Building2 size={40} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-gray-900">Инженеринг и строителство</h3>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <Tags size={40} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-gray-900">Търговия на едро</h3>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <Factory size={40} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-gray-900">Производство на стоки</h3>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <Handshake size={40} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-gray-900">Посредничество</h3>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/bg/uslugi" 
              className="inline-block px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              Всички услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/5 rounded-lg transform translate-x-4 translate-y-4" />
              <img 
                src="https://royal-plan.com/wp-content/uploads/2023/11/royal-plan.com_home_img2.webp" 
                alt="Why choose us" 
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content & Accordion */}
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-10">Защо да изберете Royalplan Consulting?</h2>
              
              <div className="space-y-4 mb-10">
                {accordionData.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-md bg-white overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                    >
                      <span className="font-serif text-lg text-gray-900">{item.title}</span>
                      <ChevronDown 
                        className={`text-blue-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <Link 
                to="/bg/za-nas" 
                className="inline-block px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors"
              >
                За нас
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a1a1a] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">Как можем да Ви помогнем?</h2>
          <Link 
            to="/bg/kontakti" 
            className="inline-block px-10 py-5 bg-white text-gray-900 font-bold uppercase tracking-wider text-sm rounded-md hover:bg-gray-100 transition-colors shadow-lg"
          >
            Свържете се с нас още днес
          </Link>
        </div>
      </section>
    </div>
  );
}
