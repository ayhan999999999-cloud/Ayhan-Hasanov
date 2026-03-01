import { Building2, Tags, Factory, Handshake } from 'lucide-react';

export default function Services() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Услуги</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Водещи в международния проектен мениджмънт и документацията. Вашият партньор за успешни проекти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Building2 size={32} className="text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Инженеринг и строителство</h3>
            <p className="text-gray-600 leading-relaxed">
              Предоставяме цялостни решения за инженеринг и строителство, гарантирайки високо качество и спазване на сроковете за всеки проект.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Tags size={32} className="text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Търговия на едро</h3>
            <p className="text-gray-600 leading-relaxed">
              Оптимизираме вашите търговски процеси и ви помагаме да разширите пазарния си дял чрез стратегически партньорства.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Factory size={32} className="text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Производство на стоки</h3>
            <p className="text-gray-600 leading-relaxed">
              Консултации за подобряване на производствените процеси, намаляване на разходите и повишаване на ефективността.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Handshake size={32} className="text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Посредничество</h3>
            <p className="text-gray-600 leading-relaxed">
              Професионално посредничество при бизнес сделки, преговори и установяване на дългосрочни бизнес отношения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
