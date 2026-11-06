import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Sparkles, ChevronRight, Video, Maximize2 } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';

export default function Screen4VideoMemories({ onNext }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoError, setVideoError] = useState({});

  const videos = birthdayData.videoScreen.videos;

  const handleOpenVideo = (video) => {
    soundEffects.playSparkle();
    setActiveVideo(video);
  };

  const handleClose = () => {
    soundEffects.playSparkle();
    setActiveVideo(null);
  };

  return (
    <div className="relative min-h-screen px-4 py-20 max-w-6xl mx-auto z-10 flex flex-col justify-between">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-400/20">
          {birthdayData.videoScreen.badge}
        </span>
        <h2 className="font-cinematic text-3xl sm:text-5xl text-slate-100 font-bold mt-3">
          {birthdayData.videoScreen.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
          {birthdayData.videoScreen.subtitle}
        </p>
      </div>

      {/* Video Cards Grid */}
      <div className={`pb-12 ${videos.length === 1 ? 'max-w-2xl mx-auto w-full' : 'grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10'}`}>
        {videos.map((vid, index) => {
          const hasError = videoError[vid.id];
          return (
            <motion.div
              key={vid.id}
              className="relative glass-card rounded-2xl overflow-hidden group border border-white/10 hover:border-gold-400/40 shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              onClick={() => handleOpenVideo(vid)}
            >
              {/* Video Thumbnail / Preview Area */}
              <div className="relative aspect-video bg-slate-950 overflow-hidden flex items-center justify-center">
                {!hasError ? (
                  <video
                    src={vid.url}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => setVideoError((prev) => ({ ...prev, [vid.id]: true }))}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                ) : (
                  /* Fallback when video1.mp4 is not yet uploaded */
                  <div className="w-full h-full bg-gradient-to-tr from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-3 shadow-lg">
                      <Film className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="font-cinematic text-sm font-semibold text-slate-200">
                      {vid.title}
                    </p>
                    <span className="text-[11px] text-slate-400 mt-1 font-mono">
                      Add {vid.url.split('/').pop()} in public/media/videos
                    </span>
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent pointer-events-none" />

                {/* Glowing Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 text-midnight-950 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)] group-hover:scale-115 transition-transform duration-300"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Play className="w-7 h-7 fill-midnight-950 ml-1" />
                  </motion.div>
                </div>

                {/* Badge & Duration Pills */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gold-300 uppercase">
                  {vid.badge}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-midnight-950/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                  {vid.duration}
                </div>
              </div>

              {/* Video Info Card */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinematic text-xl text-slate-100 font-bold group-hover:text-gold-300 transition-colors">
                    {vid.title}
                  </h3>
                  <Maximize2 className="w-4 h-4 text-slate-400 group-hover:text-gold-300" />
                </div>
                <p className="text-slate-400 text-sm mt-2 font-sans line-clamp-2">
                  {vid.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cinematic Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-slate-900 border border-gold-400/40 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-rose-500/80 text-white border border-white/20 transition-colors"
                title="Close Video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Element (Not autoplayed with sound) */}
              <div className="aspect-video bg-black flex items-center justify-center relative">
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Video Modal Footer */}
              <div className="p-6 bg-[#0c1222] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-cinematic text-xl text-slate-100 font-bold">
                    {activeVideo.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{activeVideo.caption}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-xs">
                  Cinematic Memory
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue to Friendship Timeline */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            soundEffects.playSparkle();
            onNext();
          }}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow-purple hover:shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>Explore Our Journey</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
