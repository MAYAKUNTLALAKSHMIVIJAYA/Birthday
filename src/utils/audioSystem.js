/**
 * Web Audio API synthesizer for sound effects and ambient fallback music.
 * Guarantees 100% offline, zero-latency sound effects without relying on external CDNs or broken assets.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientSynthNode = null;
    this.ambientInterval = null;
    this.isAmbientPlaying = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft sparkle chime when hovering or clicking cards
  playSparkle() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const freqs = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6 (bright peaceful chime)
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.6);
        } catch (e) {
          // ignore audio context restrictions
        }
      }, idx * 60);
    });
  }

  // Wax seal break / soft paper tearing sound
  playSealBreak() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.25);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      whiteNoise.start();
    } catch (e) {}
  }

  // Camera shutter snap for Polaroid gallery
  playShutter() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  // Blowing wind sound for candle extinguishing
  playBlower() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const duration = 0.8;
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.5, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {}
  }

  // Celebratory birthday chime fanfare
  playFanfare() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    // Happy birthday notes progression (C4, C4, D4, C4, F4, E4...)
    const notes = [
      { f: 261.63, d: 0.18, pause: 0.2 },
      { f: 261.63, d: 0.18, pause: 0.2 },
      { f: 293.66, d: 0.35, pause: 0.4 },
      { f: 261.63, d: 0.35, pause: 0.4 },
      { f: 349.23, d: 0.35, pause: 0.4 },
      { f: 329.63, d: 0.6, pause: 0.65 },
      // Flourish
      { f: 523.25, d: 0.4, pause: 0.4 },
      { f: 659.25, d: 0.6, pause: 0.7 }
    ];

    let delay = 0;
    notes.forEach((note) => {
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(note.f, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + note.d);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + note.d);
        } catch (e) {}
      }, delay * 1000);
      delay += note.pause;
    });
  }

  // Procedural celestial ambient melody (starts when user presses play if no mp3 exists)
  startAmbientSynth() {
    if (this.isAmbientPlaying) return;
    this.initContext();
    if (!this.ctx) return;
    this.isAmbientPlaying = true;

    // Pentatonic peaceful arpeggio (C Major 9 / Lydian)
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25, 783.99];
    let step = 0;

    const playAmbientNote = () => {
      if (!this.isAmbientPlaying || this.isMuted) return;
      try {
        const note = scale[step % scale.length];
        step = (step + (Math.random() > 0.4 ? 1 : 2)) % scale.length;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.0);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 3.0);
      } catch (e) {}
    };

    playAmbientNote();
    this.ambientInterval = setInterval(playAmbientNote, 1600);
  }

  stopAmbientSynth() {
    this.isAmbientPlaying = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  setMute(muted) {
    this.isMuted = muted;
    if (muted && this.isAmbientPlaying) {
      this.stopAmbientSynth();
    }
  }
}

export const soundEffects = new SoundSystem();
