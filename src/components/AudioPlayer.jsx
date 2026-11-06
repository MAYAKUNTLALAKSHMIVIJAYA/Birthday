import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Disc3, Bell, BellOff } from 'lucide-react';
import { soundEffects } from '../utils/audioSystem';
import { birthdayData } from '../data/birthdayData';

export default function AudioPlayer() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [sfxMuted, setSfxMuted] = useState(false);
  const [usingFallbackSynth, setUsingFallbackSynth] = useState(false);
  const audioRef = useRef(null);

  // Background music controls
  const toggleMusic = () => {
    soundEffects.initContext();

    if (isPlayingMusic) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      soundEffects.stopAmbientSynth();
      setIsPlayingMusic(false);
    } else {
      soundEffects.playSparkle();
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlayingMusic(true);
              setUsingFallbackSynth(false);
            })
            .catch(() => {
              // Custom mp3 file failed to play or isn't placed yet -> run synthesized ambient music!
              soundEffects.startAmbientSynth();
              setIsPlayingMusic(true);
              setUsingFallbackSynth(true);
            });
        }
      } else {
        soundEffects.startAmbientSynth();
        setIsPlayingMusic(true);
        setUsingFallbackSynth(true);
      }
    }
  };

  const toggleSfx = () => {
    const nextState = !sfxMuted;
    setSfxMuted(nextState);
    soundEffects.setMute(nextState);
    if (!nextState) {
      soundEffects.playSparkle();
    }
  };

  return (
    <div className="fixed top-3.5 right-3 sm:top-5 sm:right-5 z-50 flex items-center gap-1.5 sm:gap-2">
      {/* Hidden HTML5 Audio Element for custom background music */}
      <audio
        ref={audioRef}
        src={birthdayData.audio.musicUrl}
        loop
        preload="auto"
        onError={() => {
          // If custom mp3 fails, we prepare for procedural fallback
          setUsingFallbackSynth(true);
        }}
      />

      {/* Sound Effects Toggle Button */}
      <button
        onClick={toggleSfx}
        className={`p-2.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg ${
          !sfxMuted
            ? 'bg-slate-900/80 border-lavender-400/40 text-lavender-300 hover:text-gold-300 hover:border-gold-400/60'
            : 'bg-slate-950/70 border-slate-700/40 text-slate-500 hover:text-slate-400'
        }`}
        title={!sfxMuted ? 'Mute sound effects' : 'Enable sound effects'}
        aria-label="Sound effects toggle"
      >
        {!sfxMuted ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
      </button>

      {/* Music Toggle Floating Pill */}
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-500 backdrop-blur-md shadow-lg ${
          isPlayingMusic
            ? 'bg-gradient-to-r from-purple-900/80 via-slate-900/80 to-amber-950/80 border-gold-400/60 text-gold-300 shadow-[0_0_20px_rgba(251,191,36,0.25)]'
            : 'bg-slate-900/80 border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
        }`}
        title={isPlayingMusic ? 'Pause background music' : 'Play peaceful background music'}
        aria-label="Background music toggle"
      >
        {isPlayingMusic ? (
          <>
            <Disc3 className="w-4 h-4 text-gold-400 animate-spin" />
            <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline-block">
              {usingFallbackSynth ? 'Celestial Melody' : 'Music Playing'}
            </span>
            <Volume2 className="w-4 h-4 text-gold-400" />
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-lavender-400" />
            <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline-block">
              Music Off
            </span>
            <VolumeX className="w-4 h-4 text-slate-500" />
          </>
        )}
      </button>
    </div>
  );
}
