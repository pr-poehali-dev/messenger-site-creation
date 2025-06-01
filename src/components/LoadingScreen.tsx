import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4">Robsage</h1>
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/e2a7a4d7-99c6-4872-bab4-9e003fa78766.png"
            alt="Logo"
            className="w-32 h-32 animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin border-t-white"></div>
        </div>

        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-white text-lg font-medium">
          Загрузка... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
