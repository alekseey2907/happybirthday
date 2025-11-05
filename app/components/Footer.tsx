export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 border-t-2 border-pink-200">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-2 text-3xl animate-pulse-slow">
            <span>💖</span>
            <span>🎂</span>
            <span>🎉</span>
            <span>🎈</span>
            <span>✨</span>
          </div>
          
          <p className="text-pink-700 font-medium text-lg">
            Для Елизаветы 💝
          </p>
          
          <p className="text-pink-600 text-sm">
            7 ноября 2025 • 20 лет
          </p>
          
          <div className="text-pink-500 text-xs">
            Создано с теплотой и с специально для тебя
          </div>
        </div>
      </div>
    </footer>
  );
}
