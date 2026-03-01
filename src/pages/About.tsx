export default function About() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-serif text-gray-900 mb-8">За нас</h1>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Нашият екип от експерти в Роялплан Консултинг А.М.Р. ЕООД предоставя цялостни решения в областта на международния проектен мениджмънт и документация за широк спектър от индустрии. Ние разбираме специфичните предизвикателства на всеки бизнес и създаваме стратегии, които гарантират постигане на вашите цели.
              </p>
              <p>
                Независимо дали сте в сферата на инженеринга, производството, търговията на едро, или услугите, ние сме тук, за да оптимизираме вашите процеси и да ви помогнем да реализирате успешни проекти.
              </p>
              <p>
                Свържете се с нас днес, за да обсъдим как можем да ви помогнем да изведете бизнеса си на следващото ниво. Ние сме готови да бъдем вашият партньор в успеха!
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-lg transform translate-x-4 translate-y-4" />
            <img 
              src="https://royal-plan.com/wp-content/uploads/2023/11/royal-plan.com_home_img2.webp" 
              alt="About us" 
              className="relative z-10 w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
