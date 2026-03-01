export default function Contacts() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Контакти</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Свържете се с нас, за да обсъдим как можем да бъдем полезни на вашия бизнес.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100" id="contact-form">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Изпратете ни съобщение</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Име</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Електронна поща</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Съобщение</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
              >
                Изпрати
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#1a1a1a] text-white p-10 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-10">Информация за контакт</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif mb-2 text-gray-300">Телефонен номер</h3>
                <p className="text-2xl"><a href="tel:+4915750860687" className="text-blue-400 hover:underline">(+49) 157 508 606 87</a></p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2 text-gray-300">Електронна поща</h3>
                <p className="text-2xl">info@royal-plan.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2 text-gray-300">Адрес</h3>
                <p className="text-xl leading-relaxed">ул. Хан Тервел 1<br/>гр. Велики Преслав<br/>България</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
