"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '/', icon: '🏠' },
    { name: 'Подготовка к ЕГЭ', href: '/ege', icon: '📚' },
    { name: 'Путь в вуз', href: '/journey', icon: '🎓' },
     { name: 'Репетиторство', href: '/tutor', icon: '👩‍🏫' },
    { name: 'Поздравления', href: '/wishes', icon: '🎉' },
     { name: 'Не только о Лизе', href: '/not-liza', icon: 'ℹ️' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-2 border-pink-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl animate-bounce-slow">🎂</span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 group-hover:from-rose-500 group-hover:to-pink-500 transition-all">
              Елизавета
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg transform scale-105'
                    : 'text-pink-600 hover:bg-pink-100 hover:scale-105'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg'
                    : 'text-pink-600 hover:bg-pink-100'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
