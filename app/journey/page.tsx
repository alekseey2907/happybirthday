"use client";

import { useState } from 'react';

const journeySteps = [
  {
    id: 1,
    year: '2023',
    title: 'Подготовка к ЕГЭ',
    description: 'Начало длительной подготовки: занятия, репетиторские сессии и упорные тренировки.',
    icon: '�',
    status: 'completed',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 2,
    year: 'Лето 2024',
    title: 'Сдача ЕГЭ',
    description: 'Летняя сдача экзаменов — очень важный этап, благо прошло все на отлично!',
    icon: '📝',
    status: 'completed',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 3,
    year: '2024',
    title: 'Поступление (первый вуз)',
    description: 'Поступление в вуз в 2024 году — как говорится, первый блин комом )',
    icon: '🎓',
    status: 'completed',
    color: 'from-blue-400 to-cyan-500',
    note: 'Ушла из вуза позже',
  },
  {
    id: 4,
    year: 'конец 2024-го года',
    title: 'Попытка морально сломить Лизу',
    description: 'В твоём пути было даже ~общение~ с мошенниками, но они лишь закалили твой характер!',
    icon: '🎓',
    status: 'completed',
    color: 'from-blue-400 to-cyan-500',
    note: 'Только стала сильнее',
  },
  {
    id: 5,
    year: 'Весна 2025',
    title: 'Репетиторство',
    description: 'Опыт работы репетитором — помощь другим готовиться к экзаменам и закрепить знания.',
    icon: '�‍🏫',
    status: 'completed',
    color: 'from-amber-400 to-orange-400',
    hasPhotos: false,
  },
  {
    id: 6,
    year: 'Лето 2025',
    title: 'Вуз мечты',
    description: 'И вот, наконец, летом 2025 случилось оно — достижение главной цели - ВГАУ, ЖДИ!!',
    icon: '✨',
    status: 'completed',
    color: 'from-pink-400 to-rose-500',
    hasPhotos: false,
  },
  {
    id: 7,
    year: 'Осень 2025',
    title: 'Учёба в любимом вузе',
    description: 'Сейчас учусь в любимом вузе на любимой специальности — каждый день приносит новые знания и впечатления! 📚✨',
    icon: '🎓',
    status: 'current',
    color: 'from-purple-400 to-indigo-500',
    hasPhotos: false,
  },
  {
    id: 8,
    year: 'Будущее',
    title: 'Новые достижения',
    description: 'Впереди куча фото и воспоминания студенческой жизни и новых успехов.',
    icon: '🚀',
    status: 'upcoming',
    color: 'from-amber-400 to-orange-500',
    hasPhotos: false,
  },
];

export default function JourneyPage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-purple-200 opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 25 + 15}px`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              Путь в вуз мечты
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
            История упорства, смелости и достижения мечты! 🌟
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform md:-translate-x-1/2" />

            {/* Timeline items */}
            {journeySteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} 
                    flex items-center justify-center text-3xl shadow-2xl transform md:-translate-x-1/2 -translate-y-2
                    ${step.status === 'current' ? 'animate-pulse-slow scale-110' : ''}
                    ${step.status === 'upcoming' ? 'opacity-60' : ''}
                  `}
                >
                  {step.icon}
                </div>

                {/* Content card */}
                <div
                  className={`ml-28 md:ml-0 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer
                      ${step.status === 'current' ? 'border-4 border-pink-400' : ''}
                      ${step.status === 'upcoming' ? 'border-2 border-dashed border-gray-300' : ''}
                    `}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                        {step.year}
                      </span>
                      {step.note && (
                        <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                          {step.note}
                        </span>
                      )}
                      {step.status === 'current' && (
                        <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-semibold animate-pulse">
                          Сейчас здесь! 🎉
                        </span>
                      )}
                      {step.status === 'upcoming' && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-semibold">
                          Скоро... ⏳
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                    {step.hasPhotos === false && step.status === 'upcoming' && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-2 border-dashed border-pink-300">
                        <p className="text-sm text-pink-600 font-medium text-center">
                          📸 Здесь скоро появятся фотографии!
                        </p>
                      </div>
                    )}

                    {step.status === 'current' && (
                      <div className="mt-4 flex justify-center space-x-2 text-3xl animate-bounce">
                        <span>🎊</span>
                        <span>✨</span>
                        <span>🌟</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center transform hover:scale-105 transition-transform">
            <p className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Путь к мечте не всегда прямой, но каждый шаг делает нас сильнее!"
            </p>
            <p className="text-lg opacity-90">
              Гордимся твоей смелостью и упорством! 💪✨
            </p>
          </div>
        </div>

        {/* Future photo placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-dashed border-pink-300">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-6">
              📸 Галерея будущих достижений (которые обязательно будут!!)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-6xl opacity-50 hover:opacity-75 transition-opacity"
                >
                  📷
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
