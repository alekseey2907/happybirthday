"use client";

import { useEffect, useState } from 'react';

export default function WishesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const birthdayDate = new Date('2025-11-07');
  const today = new Date();
  const daysUntilBirthday = Math.ceil((birthdayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 overflow-hidden">
      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 drop-shadow-lg">
              С Днем Рождения!
            </span>
          </h1>

          {/* Name */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-8 animate-bounce-slow">
            Елизавета 🎂
          </h2>

          {/* Age badge */}
          <div className="inline-block mb-8 animate-pulse-slow">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-5xl md:text-6xl font-extrabold">20 лет!</span>
            </div>
          </div>

          {/* Date */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-pink-700 font-semibold mb-4">
              📅 7 ноября 2025
            </p>
            {daysUntilBirthday > 0 && (
              <p className="text-xl md:text-2xl text-pink-600">
                Осталось всего {daysUntilBirthday} {daysUntilBirthday === 1 ? 'день' : daysUntilBirthday < 5 ? 'дня' : 'дней'}! 🎉
              </p>
            )}
            {daysUntilBirthday === 0 && (
              <p className="text-xl md:text-2xl text-pink-600 animate-pulse">
                Сегодня твой особенный день! 🎊
              </p>
            )}
          </div>

          {/* Wishes */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-4 border-pink-200">
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
                ✨ Желаю тебе ✨
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">🌟</span>
                <span>Сказочного счастья и невероятных приключений</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">💝</span>
                <span>Искренней любви и крепкой дружбы</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">🎯</span>
                <span>Исполнения всех заветных желаний</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">☀️</span>
                <span>Солнечных дней и теплых моментов</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">✨</span>
                <span>Вдохновения и успеха во всех начинаниях</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">🎓</span>
                <span>Блестящей учебы в вузе мечты</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-3xl">💪</span>
                <span>Сил и энергии для достижения всех целей</span>
              </p>
            </div>
          </div>

          {/* Personal message */}
          <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-6">
              Ты просто невероятная! 🌟
            </p>
            <div className="text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                Твой путь полон упорства и смелости. Ты прошла через подготовку к ЕГЭ, 
                не побоялась изменить свой путь, бросив нелюбимый ВУЗ, прошла проверку на стальные нервы от мошенников
                и нашла дорогу к вузу и специальности мечты!
              </p>
              <p>
                Пусть этот новый этап жизни принесет тебе море радости,
                незабываемых впечатлений и самых ярких эмоций, и по возможности жениха с порш панамерой!
                </p>
              <p>
                хотя нет!! пусть судьба принесет тебе человека, который вдохновит купить порш панамеру САМОЙ!!!
              </p>
              <p className="text-2xl font-bold mt-6">
                С 20-летием! 🎉🎂🎈
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="text-xl md:text-2xl text-pink-700 font-medium italic px-4 mb-8">
            <p className="mb-4">
              Ты достойна всего самого лучшего в этом мире! ✨
            </p>
            <p>
              Верь в себя, иди к своим мечтам и никогда не сдавайся! 💪💖
            </p>
          </div>

          {/* Confetti emojis */}
          <div className="mt-12 text-6xl md:text-7xl space-x-4 animate-bounce">
            🎉 🎊 🎁 🎈 🎂 🌸 💐 ✨
          </div>
        </div>
      </div>
    </main>
  );
}
