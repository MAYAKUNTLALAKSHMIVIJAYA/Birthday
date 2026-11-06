import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronRight, ChevronLeft, Sparkles, ZoomIn, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import ImageWithFallback from '../components/ImageWithFallback';
import { soundEffects } from '../utils/audioSystem';

export default function Screen3MemoryGallery({ onNext }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});

  const photos = birthdayData.galleryScreen.photos;

  const handleOpenPhoto = (photo) => {
    soundEffects.playShutter();
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    soundEffects.playSparkle();
    setSelectedPhoto(null);
  };

  const toggleHeart = (e, id) => {
    e.stopPropagation();
    soundEffects.playSparkle();
    setLikedPhotos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navigateLightbox = (direction) => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % photos.length
        : (currentIndex - 1 + photos.length) % photos.length;
    soundEffects.playShutter();
    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <div className="relative min-h-screen px-4 py-20 max-w-7xl mx-auto z-10 flex flex-col justify-between">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-400/20">
          {birthdayData.galleryScreen.badge}
        </span>
        <h2 className="font-cinematic text-3xl sm:text-5xl text-slate-100 font-bold mt-3">
          {birthdayData.galleryScreen.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
          {birthdayData.galleryScreen.subtitle}
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-12">
        {photos.map((photo, index) => {
          const isLiked = likedPhotos[photo.id];
          return (
            <motion.div
              key={photo.id}
              className="relative cursor-pointer group"
              style={{ rotate: `${photo.rotation}deg` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 30,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleOpenPhoto(photo)}
            >
              {/* Decorative Washi Tape / Pushpin on top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/40 backdrop-blur-sm border border-amber-300/30 -rotate-3 z-20 shadow-sm pointer-events-none rounded-sm" />

              {/* Polaroid Frame */}
              <div className="bg-[#121829] border border-white/10 rounded-xl p-4 pb-5 shadow-polaroid group-hover:border-gold-400/50 group-hover:shadow-glow-gold transition-all duration-300">
                {/* Photo Image Area */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-white/5">
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.title}
                    fallbackTitle={photo.title}
                    fallbackTheme={photo.fallbackTheme}
                    fallbackIcon={index % 2 === 0 ? 'sparkles' : 'compass'}
                  />

                  {/* Highlight pill */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gold-300 uppercase">
                    {photo.highlight}
                  </div>

                  {/* Hover Quick Zoom Cue */}
                  <div className="absolute inset-0 bg-midnight-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-gold-400/90 text-midnight-950 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Polaroid Caption Area */}
                <div className="mt-4 pt-1 flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-handwritten text-xl sm:text-2xl text-slate-100 font-bold group-hover:text-gold-300 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Heart reaction button */}
                  <button
                    onClick={(e) => toggleHeart(e, photo.id)}
                    className="p-2 rounded-full hover:bg-white/5 transition-colors"
                    title="Like photo"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        isLiked ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-500 hover:text-rose-400'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-[#0d1322] border border-gold-400/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-rose-500/80 text-white border border-white/20 transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Media */}
              <div className="w-full md:w-3/5 bg-black min-h-[320px] sm:min-h-[420px] flex items-center justify-center relative">
                <ImageWithFallback
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  fallbackTitle={selectedPhoto.title}
                  fallbackTheme={selectedPhoto.fallbackTheme}
                  className="w-full h-full object-contain"
                />

                {/* Left/Right controls */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-3 p-2 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white border border-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-3 p-2 rounded-full bg-slate-900/70 hover:bg-slate-800 text-white border border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Details */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-xs uppercase mb-3">
                    {selectedPhoto.date}
                  </div>
                  <h3 className="font-cinematic text-2xl text-slate-100 font-bold">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mt-4">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Vault Memory</span>
                  <div className="flex items-center gap-1.5 text-gold-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Unforgettable</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue to Video Memories */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            soundEffects.playSparkle();
            onNext();
          }}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow-purple hover:shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>Watch Cinematic Videos</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
