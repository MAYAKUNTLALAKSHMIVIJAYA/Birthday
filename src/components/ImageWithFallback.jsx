import React, { useState } from 'react';
import { Camera, Sparkles, Compass, Trophy, Coffee, Heart, Mountain } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = 'Memory photograph',
  className = '',
  fallbackTitle = 'Precious Memory',
  fallbackTheme = 'amber',
  fallbackIcon = 'sparkles',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Gradient themes for artistic memory fallbacks
  const themeGradients = {
    amber: 'from-amber-900/60 via-slate-900 to-amber-950/80 border-amber-500/20 text-amber-300',
    emerald: 'from-emerald-950/70 via-slate-900 to-teal-950/80 border-emerald-500/20 text-emerald-300',
    violet: 'from-violet-950/70 via-slate-900 to-purple-950/80 border-purple-500/20 text-purple-300',
    indigo: 'from-indigo-950/70 via-slate-900 to-blue-950/80 border-indigo-500/20 text-indigo-300',
    rose: 'from-rose-950/70 via-slate-900 to-pink-950/80 border-rose-500/20 text-rose-300',
    sky: 'from-sky-950/70 via-slate-900 to-cyan-950/80 border-sky-500/20 text-sky-300',
  };

  const currentTheme = themeGradients[fallbackTheme] || themeGradients.amber;

  const renderIcon = () => {
    switch (fallbackIcon) {
      case 'compass': return <Compass className="w-10 h-10 animate-spin-slow opacity-80" />;
      case 'trophy': return <Trophy className="w-10 h-10 opacity-80" />;
      case 'coffee': return <Coffee className="w-10 h-10 opacity-80" />;
      case 'heart': return <Heart className="w-10 h-10 opacity-80" />;
      case 'mountain': return <Mountain className="w-10 h-10 opacity-80" />;
      default: return <Sparkles className="w-10 h-10 opacity-80" />;
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full min-h-[220px] bg-gradient-to-br ${currentTheme} p-6 flex flex-col items-center justify-center text-center relative overflow-hidden select-none ${className}`}
      >
        {/* Subtle decorative background rings */}
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-white/5 opacity-40 pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full border border-white/5 opacity-40 pointer-events-none" />
        
        {/* Glowing centerpiece */}
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-3 shadow-lg">
          {renderIcon()}
        </div>

        <p className="font-cinematic text-sm tracking-widest uppercase font-semibold text-slate-200">
          {fallbackTitle}
        </p>
        <span className="text-[11px] text-slate-400 mt-1 font-sans flex items-center gap-1">
          <Camera className="w-3 h-3 text-gold-400" />
          <span>Upload your photo in /media/photos</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center animate-pulse">
          <Camera className="w-6 h-6 text-slate-600 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        loading="lazy"
      />
    </div>
  );
}
