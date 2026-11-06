import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Flame, MapPin, Award, ChevronRight, Clock } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';
import { soundEffects } from '../utils/audioSystem';

export default function Screen5OurJourney({ onNext }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const milestones = birthdayData.journeyScreen.milestones;

  const categories = ['All', ...new Set(milestones.map((m) => m.category))];

  const filteredMilestones =
    selectedCategory === 'All'
      ? milestones
      : milestones.filter((m) => m.category === selectedCategory);

  const getMilestoneIcon = (iconName) => {
    switch (iconName) {
      case 'shield': return <Shield className="w-5 h-5 text-indigo-400" />;
      case 'flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'map-pin': return <MapPin className="w-5 h-5 text-emerald-400" />;
      case 'award': return <Award className="w-5 h-5 text-gold-400" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-20 max-w-5xl mx-auto z-10 flex flex-col justify-between">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1 rounded-full border border-gold-400/20">
          {birthdayData.journeyScreen.badge}
        </span>
        <h2 className="font-cinematic text-3xl sm:text-5xl text-slate-100 font-bold mt-3">
          {birthdayData.journeyScreen.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
          {birthdayData.journeyScreen.subtitle}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEffects.playSparkle();
                setSelectedCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-midnight-950 font-bold shadow-glow-gold'
                  : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative py-6">
        {/* Glowing Central Neon Line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent shadow-[0_0_15px_#fbbf24]" />

        <div className="space-y-12">
          {filteredMilestones.map((m, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={m.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Center Node Badge */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-2 border-gold-400/80 shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center z-20">
                  {getMilestoneIcon(m.icon)}
                </div>

                {/* Card Content */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] ml-16 md:ml-0 ${
                    isEven ? 'md:pl-0 md:pr-4' : 'md:pr-0 md:pl-4'
                  }`}
                >
                  <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-gold-400/40 shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-gold-300 font-mono text-[11px] border border-gold-400/20">
                        <Clock className="w-3 h-3 text-gold-400" />
                        {m.year}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-lavender-400 tracking-wider">
                        {m.highlight}
                      </span>
                    </div>

                    <h3 className="font-cinematic text-lg sm:text-xl text-slate-100 font-bold group-hover:text-gold-300 transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mt-2.5">
                      {m.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Continue to Emotional Letter */}
      <div className="text-center mt-14">
        <button
          onClick={() => {
            soundEffects.playSparkle();
            onNext();
          }}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-gold-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow-purple hover:shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>Read A Special Message</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
