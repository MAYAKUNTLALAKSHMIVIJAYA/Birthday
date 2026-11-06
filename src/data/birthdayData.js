/**
 * ==============================================================================
 * 🎂 BIRTHDAY SURPRISE MASTER CONFIGURATION FOR SUJITH
 * ==============================================================================
 */

export const birthdayData = {
  // 🌟 Recipient & Occasion Details
  recipient: {
    name: "Sujith", // Best friend's name
    nickname: "Brother / Legend",
    birthdayDate: "Special Day", // Celebrated occasion
    birthYear: "Special Year",
    milestoneAge: "",
  },

  // 🎵 Audio Settings
  audio: {
    // Selected peaceful, emotional piano masterpiece: Debussy's Clair de Lune (Moonlight)
    musicUrl: "/media/music/birthday-music.mp3",
    musicTitle: "Clair de Lune (Moonlight) - Emotional Piano",
    fallbackSynthesizer: true,
  },

  // 🌌 Screen 1: Mysterious Welcome
  welcomeScreen: {
    badge: "A SPECIAL SURPRISE EXPERIENCE",
    mysteryQuote: "Some people make ordinary moments unforgettable...",
    subQuote: "Tonight, beneath the stars, something crafted just for you is waiting, Sujith.",
    buttonText: "Discover Your Surprise",
  },

  // 💌 Screen 2: Secret Wax-Sealed Envelope
  envelopeScreen: {
    introHeading: "Hey Sujith!",
    introSubheading: "Before you step forward into this night, there's a personal letter meant only for your eyes.",
    sealLabel: "BREAK SEAL",
    letterDate: "Today & Forever",
    letterGreeting: "Dear Sujith,",
    letterBody: [
      "Life moves incredibly fast, and between all our daily hustle, work, and ambitions, we rarely pause to say what truly matters.",
      "Having you as my brother and best friend has been one of the greatest blessings. Through every storm, every win, and every crazy moment, you've always stood like an absolute rock.",
      "This isn't just an ordinary birthday greeting or a simple text. I created this entire experience tonight to celebrate you, our unbreakable bond, and all the legendary memories we've shared.",
      "Take a deep breath, turn up the music, and let's take a walk down our memory lane..."
    ],
    letterClosing: "With unbreakable love & respect,",
    letterSignature: "Your Best Friend ❤️",
    continueButtonText: "Enter The Vault Of Memories",
  },

  // 📸 Screen 3: Polaroid Memory Gallery (Loaded with your uploaded photos)
  galleryScreen: {
    badge: "CHAPTER ONE",
    title: "The Memory Vault",
    subtitle: "Every picture holds laughter, late-night talks, and stories only we will ever truly understand.",
    photos: [
      {
        id: "photo-1",
        title: "Moments of Pure Joy",
        date: "Unforgettable Times",
        caption: "One of those genuine moments where laughter was effortless and life felt limitless.",
        url: "/media/photos/photo1.jpeg",
        rotation: -3,
        aspect: "vertical",
        fallbackTheme: "emerald",
        highlight: "True Smile",
      },
      {
        id: "photo-2",
        title: "The Brotherhood Bond",
        date: "Golden Days",
        caption: "Standing strong together through every chapter. A friendship built on real loyalty.",
        url: "/media/photos/photo2.jpeg",
        rotation: 3,
        aspect: "horizontal",
        fallbackTheme: "amber",
        highlight: "Brotherhood",
      },
      {
        id: "photo-3",
        title: "Unmatched Energy",
        date: "Vibes & Laughs",
        caption: "Every time we hang out, there's never a dull second. Pure unscripted energy.",
        url: "/media/photos/photo3.jpeg",
        rotation: -2,
        aspect: "vertical",
        fallbackTheme: "violet",
        highlight: "Good Vibes",
      },
      {
        id: "photo-4",
        title: "The Vision & The Grind",
        date: "Big Dreams",
        caption: "Talking about the future, our goals, and pushing each other to achieve greatness.",
        url: "/media/photos/photo4.jpeg",
        rotation: 4,
        aspect: "horizontal",
        fallbackTheme: "indigo",
        highlight: "Dreamers",
      },
      {
        id: "photo-5",
        title: "Cherished Memories",
        date: "Classic Moments",
        caption: "No matter how much time passes, these snapshots remind us how far we've come.",
        url: "/media/photos/photo5.jpeg",
        rotation: -3,
        aspect: "vertical",
        fallbackTheme: "rose",
        highlight: "Priceless",
      },
      {
        id: "photo-6",
        title: "Always Having Your Back",
        date: "Unbreakable",
        caption: "Through thick and thin, no distance or busy schedules can ever change this brotherhood.",
        url: "/media/photos/photo6.jpeg",
        rotation: 2,
        aspect: "horizontal",
        fallbackTheme: "sky",
        highlight: "Forever Friends",
      },
    ],
  },

  // 🎬 Screen 4: Cinematic Video Memories (Loaded with your uploaded video)
  videoScreen: {
    badge: "CHAPTER TWO",
    title: "Cinematic Time Capsules",
    subtitle: "Because photographs capture a moment, but video brings the laughter and memories back to life.",
    videos: [
      {
        id: "video-1",
        title: "The Sujith Chronicles",
        duration: "Special Highlight",
        caption: "Unfiltered smiles, unforgettable moments, and the unmatched energy you bring everywhere you go.",
        url: "/media/videos/video1.mp4",
        thumbnail: "/media/photos/photo1.jpeg",
        badge: "Special Memory",
        fallbackIcon: "smile",
      },
    ],
  },

  // 🗺️ Screen 5: Our Journey (Friendship Timeline)
  journeyScreen: {
    badge: "CHAPTER THREE",
    title: "Our Journey Together",
    subtitle: "A timeline of moments that turned two people into brothers for life.",
    milestones: [
      {
        id: "m-1",
        year: "The Beginning",
        category: "Origin",
        title: "The Day We First Became Friends",
        description: "From our very first conversation, it was obvious we were going to make history together.",
        icon: "sparkles",
        highlight: "Chapter 1",
      },
      {
        id: "m-2",
        year: "Unstoppable",
        category: "Crazy Times",
        title: "Crazy Shenanigans & Endless Laughs",
        description: "The inside jokes, hilarious misadventures, and moments that only make sense to us two.",
        icon: "shield",
        highlight: "True Loyalty",
      },
      {
        id: "m-3",
        year: "Leveling Up",
        category: "Milestones",
        title: "Chasing Dreams & Supporting Each Other",
        description: "When times got challenging, you never let me quit. Having a friend like Sujith gives anyone strength.",
        icon: "flame",
        highlight: "Ambition",
      },
      {
        id: "m-4",
        year: "Today & Beyond",
        category: "Present",
        title: "Celebrating Sujith's Big Day",
        description: "Another year older, wiser, stronger, and more successful. Proud of the man you are!",
        icon: "award",
        highlight: "Legendary",
      },
    ],
  },

  // 📜 Screen 6: A Special Heartfelt Message
  specialMessageScreen: {
    badge: "FROM THE BOTTOM OF MY HEART",
    heading: "Some friendships are simply special.",
    quote: "“A true friend is someone who knows all about you, and still loves you just the same.”",
    paragraphs: [
      "Sujith, in a world where almost everything is temporary and people change with seasons, having you in my life is something I never take for granted.",
      "Your genuine heart, your dedication to the people you care about, your humor, and your resilience inspire everyone around you every single day.",
      "On this special birthday, I pray that this year unlocks doors you've been working hard to open. May health, immense wealth, inner peace, and happiness follow you wherever you step.",
      "Thank you for being the truest brother anyone could ever ask for. Keep shining and never dim your light for anyone."
    ],
    signature: "Always your brother in arms,",
    senderName: "Your Best Friend",
  },

  // 🎂 Screen 7: The Big Birthday Surprise (The Climax)
  birthdaySurpriseScreen: {
    suspenseText: "Wait... You thought that was everything, Sujith?",
    countdownPrompt: "Get ready... take a deep breath...",
    revealGreeting: "HAPPY BIRTHDAY",
    revealSubtitle: "To the legend, the brother, the one and only",
    cakePrompt: "Blow out the candles & make a heartfelt wish!",
    candlesCount: 5,
    wishesBlownTitle: "✨ HAPPY BIRTHDAY SUJITH! ✨",
    wishesBlownText: "May every single wish you make tonight come true in the most magnificent way! The universe has big plans for you this year, Sujith. Keep conquering!",
    confettiColors: ['#fbbf24', '#f59e0b', '#c084fc', '#e879f9', '#38bdf8', '#ffffff'],
  },

  // 🎁 Screen 8: The Final Secret Surprise
  finalSurpriseScreen: {
    buttonLabel: "One Last Secret...",
    teaserText: "Before you close this page, there's one final vault item locked behind the stars...",
    dialogTitle: "A Permanent Keepsake",
    secretQuote: "“Good times become better memories, and great friends become lifelong brothers.”",
    hiddenPhotoUrl: "/media/photos/photo7.jpeg", // Using your uploaded 7th photo for the secret finale!
    hiddenPhotoCaption: "To Sujith: To a hundred more birthdays, shared victories, and stories worth writing books about.",
    finalWords: "Keep smiling. Keep shining. And never stop being you, Sujith.",
    replayPrompt: "Want to experience the journey again?",
    replayButton: "Replay Experience ↺",
  },
};
