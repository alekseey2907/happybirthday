# 📸 Инструкция по добавлению новых фотографий

## Когда появятся фотографии из вуза

### Шаг 1: Добавьте фотографии в проект

1. Создайте папку для фотографий из вуза:
```
public/
  images/
    university/  <- здесь будут новые фото
```

2. Скопируйте фотографии в эту папку

### Шаг 2: Обновите страницу "Путь в вуз"

Откройте файл `app/journey/page.tsx` и найдите раздел с placeholder'ом для будущих фото (строка ~180):

```typescript
{/* Future photo placeholder */}
<div className="mt-16 max-w-4xl mx-auto">
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-dashed border-pink-300">
```

Замените весь этот блок на реальную галерею:

```typescript
{/* University Photo Gallery */}
<div className="mt-16 max-w-4xl mx-auto">
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
    <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-6">
      📸 Студенческая жизнь в вузе мечты
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        { src: '/images/university/photo1.jpg', caption: 'Первый день в вузе!' },
        { src: '/images/university/photo2.jpg', caption: 'На лекции' },
        { src: '/images/university/photo3.jpg', caption: 'С однокурсниками' },
        // Добавьте столько фото, сколько нужно
      ].map((photo, i) => (
        <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  </div>
</div>
```

### Фотографии репетиторства
Если у вас есть фотографии с занятий (репетиторство весной 2025), добавьте их в:

```
public/
  images/
    tutor/
```

Затем откройте `app/tutor/page.tsx` и замените placeholder-галерею на реальные изображения (массив `photos`).

### Шаг 3: Или создайте отдельную страницу галереи

Если фотографий будет много, создайте новую страницу `app/university/page.tsx`:

```typescript
"use client";

import Image from 'next/image';

const photos = [
  { id: 1, src: '/images/university/photo1.jpg', caption: 'Описание фото 1' },
  { id: 2, src: '/images/university/photo2.jpg', caption: 'Описание фото 2' },
  // ... добавьте все фото
];

export default function UniversityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Студенческая жизнь
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="relative h-80">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-center font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

Затем добавьте ссылку в навигацию (`app/components/Header.tsx`):

```typescript
const navItems = [
  { name: 'Главная', href: '/', icon: '🏠' },
  { name: 'Подготовка к ЕГЭ', href: '/ege', icon: '📚' },
  { name: 'Путь в вуз', href: '/journey', icon: '🎓' },
  { name: 'Студенческая жизнь', href: '/university', icon: '🎓' }, // <- добавьте эту строку
  { name: 'Поздравления', href: '/wishes', icon: '🎉' },
];
```

### Шаг 4: Обновите сайт

После добавления фотографий:

1. Если сайт запущен локально - он автоматически обновится
2. Если сайт на Vercel:
   ```bash
   git add .
   git commit -m "Добавлены фотографии из вуза"
   git push
   ```
   Vercel автоматически задеплоит изменения!

## Форматы фотографий

- Рекомендуемые форматы: JPG, PNG, WebP
- Next.js автоматически оптимизирует изображения
- Можно использовать любые размеры - они будут адаптированы

## Если нужна помощь

Просто откройте проект в VS Code и попросите GitHub Copilot помочь добавить фотографии! 😊
