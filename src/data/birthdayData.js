/**
 * ==============================================================================
 * 🎂 BIRTHDAY SURPRISE MASTER CONFIGURATION FOR SUJITH
 * ==============================================================================
 * Thoughtful, warm, and magical birthday experience from a female friend to Sujith.
 */

export const birthdayData = {
  // 🌟 Recipient & Occasion Details
  recipient: {
    name: "Sujith",
    nickname: "A Wonderful Friend",
    birthdayDate: "Special Day",
    birthYear: "Special Year",
    milestoneAge: "",
  },

  // 🎵 Audio Settings
  audio: {
    // Selected peaceful, emotional piano masterpiece: Debussy's Clair de Lune (Moonlight)
    musicUrl: "/media/music/birthday-music.mp3",
    musicTitle: "Clair de Lune (Moonlight) - Peaceful Piano",
    fallbackSynthesizer: true,
  },

  // 🌌 Screen 1: Mysterious Welcome
  welcomeScreen: {
    badge: "A SPECIAL BIRTHDAY SURPRISE",
    mysteryQuote: "Some people make ordinary moments unforgettable...",
    subQuote: "Tonight, beneath the stars, a little surprise crafted just for you is waiting, Sujith.",
    buttonText: "Discover Your Surprise",
  },

  // 💌 Screen 2: Secret Wax-Sealed Envelope
  envelopeScreen: {
    introHeading: "Hey Sujith!",
    introSubheading: "Before you continue, there is a personal letter I wanted to share with you today.",
    sealLabel: "BREAK SEAL",
    letterDate: "Today & Always",
    letterGreeting: "Dear Sujith,",
    letterBody: [
      "Life moves so quickly, and between our busy routines and everyday moments, we don't always pause to appreciate the wonderful people in our lives.",
      "I just wanted to take a moment today to let you know how much I value our friendship. You bring so much positivity, laughter, and great energy wherever you go.",
      "I put together this little interactive website tonight to celebrate you and bring a bright smile to your face on your special day.",
      "Take a deep breath, listen to the peaceful music, and enjoy this little journey created just for you!"
    ],
    letterClosing: "Warmest wishes,",
    letterSignature: "Your Friend ✨",
    continueButtonText: "Enter The Vault Of Memories",
  },

  // 📸 Screen 3: Polaroid Memory Gallery (Loaded with your uploaded photos)
  galleryScreen: {
    badge: "CHAPTER ONE",
    title: "The Memory Vault",
    subtitle: "A collection of genuine smiles, fun moments, and memories that are always wonderful to look back on.",
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
        title: "Great Times & Good Vibes",
        date: "Golden Days",
        caption: "Wonderful conversations and memories that never fail to bring a smile.",
        url: "/media/photos/photo2.jpeg",
        rotation: 3,
        aspect: "horizontal",
        fallbackTheme: "amber",
        highlight: "Good Times",
      },
      {
        id: "photo-3",
        title: "Unmatched Energy",
        date: "Vibes & Laughs",
        caption: "Every time we hang out, there's always fun energy and endless laughter.",
        url: "/media/photos/photo3.jpeg",
        rotation: -2,
        aspect: "vertical",
        fallbackTheme: "violet",
        highlight: "Fun Vibes",
      },
      {
        id: "photo-4",
        title: "Big Dreams & Ambition",
        date: "Looking Ahead",
        caption: "Talking about goals and aspirations. Always inspired by your dedication.",
        url: "/media/photos/photo4.jpeg",
        rotation: 4,
        aspect: "horizontal",
        fallbackTheme: "indigo",
        highlight: "Dreamer",
      },
      {
        id: "photo-5",
        title: "Cherished Moments",
        date: "Memorable Times",
        caption: "Pictures that capture the simple, happy moments of our friendship.",
        url: "/media/photos/photo5.jpeg",
        rotation: -3,
        aspect: "vertical",
        fallbackTheme: "rose",
        highlight: "Special",
      },
      {
        id: "photo-6",
        title: "Always Rooting For You",
        date: "Friendship",
        caption: "Wishing you the very best in every chapter ahead. Always cheering you on!",
        url: "/media/photos/photo6.jpeg",
        rotation: 2,
        aspect: "horizontal",
        fallbackTheme: "sky",
        highlight: "True Friend",
      },
    ],
  },

  // 🎬 Screen 4: Cinematic Video Memories (Loaded with your uploaded video)
  videoScreen: {
    badge: "CHAPTER TWO",
    title: "Cinematic Time Capsules",
    subtitle: "Because photographs capture a moment, but video brings all the laughter and good energy right back to life.",
    videos: [
      {
        id: "video-1",
        title: "The Sujith Chronicles",
        duration: "Special Highlight",
        caption: "Unfiltered smiles, great moments, and the bright energy you bring everywhere you go.",
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
    subtitle: "A timeline of fun moments, shared chats, and memorable milestones.",
    milestones: [
      {
        id: "m-1",
        year: "The Beginning",
        category: "Origin",
        title: "The Day We First Crossed Paths",
        description: "Looking back at when we first met and became friends—time truly flies when life is fun!",
        icon: "sparkles",
        highlight: "Chapter 1",
      },
      {
        id: "m-2",
        year: "Fun Times",
        category: "Crazy Times",
        title: "Hilarious Chats & Unstoppable Laughs",
        description: "All the funny conversations, shared jokes, and lighthearted moments that made days brighter.",
        icon: "shield",
        highlight: "Great Chats",
      },
      {
        id: "m-3",
        year: "Leveling Up",
        category: "Milestones",
        title: "Cheering For Your Dreams",
        description: "Watching you learn, grow, and pursue your goals. Keep aiming high!",
        icon: "flame",
        highlight: "Ambition",
      },
      {
        id: "m-4",
        year: "Today",
        category: "Present",
        title: "Celebrating Sujith's Special Day",
        description: "Another fantastic year to celebrate! May this new chapter bring you endless joy and blessings.",
        icon: "award",
        highlight: "Celebration",
      },
    ],
  },

  // 📜 Screen 6: A Special Heartfelt Message
  specialMessageScreen: {
    badge: "A SPECIAL BIRTHDAY WISH",
    heading: "Some friendships are simply special.",
    quote: "“Good friends are like stars; you don't always see them, but you know they're always there.”",
    paragraphs: [
      "Sujith, on your birthday, I wanted to take a moment to say how much I truly appreciate having a friend like you in my life.",
      "You have such a genuine personality, a great sense of humor, and a kind nature that makes everyone around you feel comfortable and valued.",
      "May this coming year bring you exciting new opportunities, peace of mind, vibrant health, and all the happiness you deserve.",
      "I hope your day is filled with laughter, wonderful surprises, and everything that makes you happy. Keep being the wonderful person you are!"
    ],
    signature: "Wishing you a fantastic year ahead,",
    senderName: "Your Friend",
  },

  // 🎂 Screen 7: The Big Birthday Surprise (The Climax)
  birthdaySurpriseScreen: {
    suspenseText: "Wait... You thought that was everything, Sujith?",
    countdownPrompt: "Get ready... take a deep breath...",
    revealGreeting: "HAPPY BIRTHDAY",
    revealSubtitle: "Wishing an extraordinary year ahead to",
    cakePrompt: "Blow out the candles & make a heartfelt wish!",
    candlesCount: 5,
    wishesBlownTitle: "✨ HAPPY BIRTHDAY SUJITH! ✨",
    wishesBlownText: "May every single wish you make tonight come true in the most wonderful way! Here's to a year filled with happiness, success, and great achievements, Sujith!",
    confettiColors: ['#fbbf24', '#f59e0b', '#c084fc', '#e879f9', '#38bdf8', '#ffffff'],
  },

  // 🎁 Screen 8: The Final Secret Surprise
  finalSurpriseScreen: {
    buttonLabel: "One Last Secret...",
    teaserText: "Before you close this page, there's one final vault item locked behind the stars...",
    dialogTitle: "A Permanent Keepsake",
    secretQuote: "“Count your life by smiles, not tears. Count your age by friends, not years.”",
    hiddenPhotoUrl: "/media/photos/photo7.jpeg", // Using your uploaded 7th photo for the secret finale!
    hiddenPhotoCaption: "To Sujith: Wishing you a memorable year filled with success, joy, and wonderful new experiences!",
    finalWords: "Keep smiling. Keep shining. And never stop being you, Sujith.",
    replayPrompt: "Want to experience the journey again?",
    replayButton: "Replay Experience ↺",
  },
};
