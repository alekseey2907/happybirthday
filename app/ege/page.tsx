"use client";

import Image from 'next/image';
import { useState } from 'react';

const photos = [
  { id: 1, src: '/images/ege/photo_2023-05-05_23-42-14.jpg', caption: 'Самое начало подготовки 📖' },
  { id: 2, src: '/images/ege/photo_2023-05-05_23-42-15.jpg', caption: 'Уставшая, но довольная 📚' },
  { id: 3, src: '/images/ege/photo_2023-05-05_23-42-17.jpg', caption: 'Вайбик подготовки ✏️' },
  { id: 4, src: '/images/ege/photo_2023-05-07_12-00-00.jpg', caption: 'Пытаемся делать мемчики 🌸' },
  { id: 5, src: '/images/ege/photo_2023-08-03_15-33-24.jpg', caption: 'Не губернатор, а школьница ващета ☀️' },
  { id: 6, src: '/images/ege/photo_2023-08-12_19-54-01.jpg', caption: 'Снова только ворк work 💪' },
  { id: 7, src: '/images/ege/photo_2023-09-13_23-05-58.jpg', caption: 'Не забываем про тестики 🍂' },
  { id: 8, src: '/images/ege/photo_2023-09-18_10-32-23.jpg', caption: 'и, конечно, любуемся собой' },
  { id: 9, src: '/images/ege/photo_2023-10-01_10-09-26.jpg', caption: 'Осенние уроки 🍁' },
  { id: 10, src: '/images/ege/photo_2023-10-04_14-49-24.jpg', caption: 'За работой 💼' },
  { id: 11, src: '/images/ege/photo_2023-10-10_07-54-53.jpg', caption: 'Кто придумал по утрам в школу ходить.. 🌅' },
  { id: 12, src: '/images/ege/photo_2023-10-15_10-08-06.jpg', caption: 'Решение задач 🧮' },
  { id: 13, src: '/images/ege/photo_2023-10-29_16-09-03.jpg', caption: 'Подготовка продолжается 📚' },
  { id: 14, src: '/images/ege/photo_2023-11-06_00-01-58.jpg', caption: 'Ночные занятия 🌙' },
  { id: 15, src: '/images/ege/photo_2023-11-14_21-45-41.jpg', caption: 'Вечерний чилл 📖' },
  { id: 16, src: '/images/ege/photo_2024-04-04_11-32-51.jpg', caption: 'Школьница 🌺' },
  { id: 17, src: '/images/ege/photo_2024-05-14_22-09-45.jpg', caption: 'Это не нервы сдали, а лук резала 🚀' },
  { id: 18, src: '/images/ege/photo_2024-06-07_15-06-30.jpg', caption: 'И снова wooork' },
  { id: 19, src: '/images/ege/photo_2024-06-12_22-18-33.jpg', caption: 'Перед экзаменами 📋' },
  { id: 20, src: '/images/ege/photo_2024-06-30_11-26-02.jpg', caption: 'Гордость семьи' },
  { id: 21, src: '/images/ege/photo_2025-10-28_20-56-11.jpg', caption: 'Последние штрихи ботки 🌟' },
  { id: 22, src: '/images/ege/photo_2025-10-28_20-57-28.jpg', caption: 'Ещё чуть-чуть 🎯' },
  { id: 23, src: '/images/ege/photo_2025-11-06_00-07-15.jpg', caption: 'ВСЁЁЁ, так выглядит счастье!!! ' },
];

export default function EgePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-200 opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 15}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
              Подготовка к ЕГЭ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            2023-2024 год - путь к успеху через упорный труд. Давай повспоминаем, как ты готовилась к экзаменам, которые сдавала летом 2024! 📚✨
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-pink-500/95 to-transparent">
                <p className="text-lg font-semibold text-center">{photo.caption}</p>
              </div>

              {/* Border animation */}
              <div className="absolute inset-0 border-4 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">📚</div>
            <div className="text-4xl font-bold text-pink-600 mb-2">700+</div>
            <div className="text-gray-600">Часов подготовки</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">💪</div>
            <div className="text-4xl font-bold text-pink-600 mb-2">∞</div>
            <div className="text-gray-600">Упорства и стараний</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-4xl font-bold text-pink-600 mb-2">1</div>
            <div className="text-gray-600">Цель - поступить!</div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-pink-300 transition-colors"
            >
              ×
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={photos.find(p => p.id === selectedPhoto)?.src || ''}
                alt={photos.find(p => p.id === selectedPhoto)?.caption || ''}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
            <p className="text-white text-center text-xl mt-4">
              {photos.find(p => p.id === selectedPhoto)?.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
