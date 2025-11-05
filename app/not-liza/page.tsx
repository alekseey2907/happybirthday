"use client";

export default function NotLizaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-pink-500">
            Не о Лизе
          </h1>

          <div className="bg-white/90 p-8 rounded-3xl shadow-xl text-left">
            <h2 className="text-2xl font-semibold mb-4">Зачем этот сайт?</h2>
            <p className="text-gray-700 mb-4">
              Этот сайт создан для поздравления Елизаветы, с надеждой, что ей хоть чуть-чуть будет приятно,
              даже если мы давно уже и не общаемся...
            </p>

            <h3 className="text-xl font-semibold mb-3">Кто автор?</h3>
            <p className="text-gray-700 mb-4">
              Автор сайта — некогда знакомый человек - Алексей Перегудов.
            </p>

            <h3 className="text-xl font-semibold mb-3">Контакт и подготовка к поздравлению</h3>
            <p className="text-gray-700 mb-4">
              Все детали по подготовке поздравления и координации — в телеграме:
            </p>
            <p className="text-center">
              <a
                className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-md hover:bg-pink-600 transition-colors"
                href="https://t.me/HBLizzie"
                target="_blank"
                rel="noreferrer"
              >
                t.me/HBLizzie
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-6">Если ссылка не открывается, скопируйте и вставьте её в браузер или Telegram.</p>
          </div>

          {/* Development Team - subtle text */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-pink-100">
            <p className="text-xs text-gray-500 text-center mb-1">Команда разработки</p>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-700">Aleksey Peregudov</p>
              <p className="text-xs text-gray-500">Full-stack Developer</p>
              <a href="mailto:peregydovaleksei2001@mail.ru" className="text-xs text-pink-500 hover:text-pink-600 hover:underline">
                peregydovaleksei2001@mail.ru
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
