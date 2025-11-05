"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function TutorPage() {
  const photos: { src: string; caption?: string }[] = [];

  const achievements = [
    {
      id: 1,
      icon: '👩‍🏫',
      title: 'Первый опыт преподавания',
      description: 'Открыла для себя удовольствие от передачи знаний другим',
    },
    {
      id: 2,
      icon: '📚',
      title: 'Помощь ученикам',
      description: 'Помогла многим подготовиться к экзаменам и улучшить знания',
    },
    {
      id: 3,
      icon: '💡',
      title: 'Развитие навыков',
      description: 'Научилась объяснять сложное простыми словами',
    },
    {
      id: 4,
      icon: '⭐',
      title: 'Позитивные отзывы',
      description: 'Благодарные ученики и их родители ценили работу',
    },
  ];

  const skills = [
    { name: 'Терпение', emoji: '🧘‍♀️' },
    { name: 'Ответственность', emoji: '✅' },
    { name: 'Коммуникация', emoji: '💬' },
    { name: 'Творческий подход', emoji: '🎨' },
    { name: 'Организованность', emoji: '📋' },
    { name: 'Эмпатия', emoji: '❤️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-teal-200 opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 25 + 15}px`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              {['📖', '✏️', '📚', '💡', '⭐'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
              Репетиторство (Весна 2025)
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-700 max-w-3xl mx-auto leading-relaxed">
            Весна 2025 - время делиться знаниями и помогать другим! 👩‍🏫✨
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="text-7xl animate-bounce-slow">👩‍🏫</div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-6">
              Новый опыт и призвание
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Весной 2025 года (а может и раньше) ты начала работать репетитором. Это был совершенно новый опыт, 
                который открыл любовь к преподаванию и работе с людьми.
              </p>
              
              <p>
                Используя свой недавний опыт подготовки и сдачи ЕГЭ, ты помогала школьникам 
                разбираться в сложных темах, готовиться к экзаменам и просто любить учёбу, 
                после чего никак нельзя не сказать, что ты УМНИЧКА!!
              </p>
              
              <p className="text-xl font-semibold text-teal-600">
                Это была не просто работа - это было призвание! 💫
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 text-center">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-teal-600 mb-3 text-center">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Навыки, которые развила
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/30"
                >
                  <div className="text-4xl mb-2">{skill.emoji}</div>
                  <div className="text-white font-semibold">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}

        </div>
      </section>
    </div>
  );
}
