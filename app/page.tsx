"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const birthdayDate = new Date('2025-11-07');
  const today = new Date();
  const daysUntilBirthday = Math.ceil((birthdayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const sections = [
    {
      title: 'Подготовка к ЕГЭ',
      description: 'Фотографии упорного труда и подготовки к экзаменам',
      icon: '📚',
      color: 'from-blue-400 to-cyan-500',
      href: '/ege',
    },
    {
      title: 'Путь в вуз мечты',
      description: 'История поступления, переосмысления и достижения цели',
      icon: '🎓',
      color: 'from-purple-400 to-pink-500',
      href: '/journey',
    },
    {
      title: 'Работа репетитором',
      description: 'Опыт преподавания и помощи другим весной 2025',
      icon: '👩‍🏫',
      color: 'from-teal-400 to-cyan-500',
      href: '/tutor',
    },
    {
      title: 'Поздравления',
      description: 'Самые теплые пожелания в этот особенный день',
      icon: '🎉',
      color: 'from-pink-400 to-rose-500',
      href: '/wishes',
    },
      {
        title: 'Не о Лизе',
        description: 'Зачем этот сайт, кто автор и как связаться (телеграм для подготовки к поздравлению)',
        icon: 'ℹ️',
        color: 'from-gray-400 to-gray-600',
        href: '/not-liza',
      },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 overflow-hidden">
      {/* Floating decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          >
            {['❤️', '✨', '🎈', '🌟', '💖'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 drop-shadow-lg">
                С Днем Рождения!
              </span>
            </h1>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-8 animate-bounce-slow">
              Елизавета 🎂
            </h2>

            {/* Age Badge */}
            <div className="inline-block mb-8 animate-pulse-slow">
              <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 text-white px-12 py-8 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <span className="text-6xl md:text-7xl font-extrabold">20 лет!</span>
              </div>
            </div>

            {/* Date Countdown */}
            <div className="mb-12">
              <p className="text-2xl md:text-3xl text-pink-700 font-semibold mb-4">
                📅 7 ноября 2025
              </p>
              {daysUntilBirthday > 0 && (
                <p className="text-xl md:text-2xl text-pink-600 animate-pulse">
                  Осталось всего {daysUntilBirthday} {daysUntilBirthday === 1 ? 'день' : daysUntilBirthday < 5 ? 'дня' : 'дней'}! 🎉
                </p>
              )}
              {daysUntilBirthday === 0 && (
                <p className="text-xl md:text-2xl text-pink-600 animate-bounce">
                  Сегодня твой особенный день! 🎊✨
                </p>
              )}
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sections.map((section, index) => (
              <Link
                key={section.href}
                href={section.href}
                className="group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-pink-300 h-full animate-fade-in">
                  <div className={`text-7xl mb-6 transform group-hover:scale-125 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {section.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${section.color} text-white font-semibold transform group-hover:translate-x-2 transition-transform`}>
                    Посмотреть
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 rounded-3xl shadow-2xl p-8 md:p-12 text-white animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold mb-6">
              ✨ Добро пожаловать, Именинница! ✨
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Здесь собраны воспоминания о твоем пути, фотографии важных моментов 
              и самые теплые поздравления. Изучай, вспоминай, улыбаться разрешено! 💖
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-4 text-6xl md:text-7xl animate-bounce">
            🎉 🎊 🎁 🎈 🎂 💐 ✨ 🌸
          </div>
        </div>
      </div>
    </main>
  );
}
