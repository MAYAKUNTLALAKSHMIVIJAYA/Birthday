# ✨ Cinematic Interactive Birthday Surprise Website

> A premium, magical, emotional, and unforgettable interactive birthday journey created with React, Vite, Tailwind CSS, Framer Motion, and Web Audio synthesis.

Designed specifically for celebrating your friend with cinematic storytelling, memory vaults, video time capsules, an interactive friendship timeline, a suspenseful 3D birthday cake with interactive candle blowing, fireworks, confetti, and secret surprises.

---

## 🌟 Key Highlights & Experience Flow

1. **Screen 1: Mysterious Welcome**
   - Full-screen midnight sky with twinkling stars, floating stardust, shooting stars, and a luminous 3D moon.
   - Mysterious quote to spark curiosity and an animated entry button.

2. **Screen 2: Secret Wax-Sealed Envelope**
   - Realistic 3D envelope with a glowing wax seal.
   - Breaking the seal opens the envelope with custom sound effects.
   - Reveals an intimate personal letter rendered with realistic typewriter animation.

3. **Screen 3: The Memory Vault (Polaroid Scrapbook)**
   - Polaroid-style cards with authentic paper tape, tilts, hover lift, and glowing borders.
   - Interactive heart reactions and click-to-zoom Lightbox with story captions and keyboard/arrow navigation.
   - Graceful fallback graphics ensuring zero broken images even before uploading custom photos.

4. **Screen 4: Cinematic Video Memories**
   - Video cards with custom play buttons, duration badges, and hover previews.
   - Full-screen cinematic video modal with HTML5 controls.
   - Audio safety: videos never autoplay with sound.

5. **Screen 5: Our Journey (Interactive Friendship Timeline)**
   - Chronological timeline connected by a glowing neon line.
   - Category filtering (*All, Origin, Crazy Times, Milestones, Adventures*).
   - Milestone cards detailing special memories, wild road trips, and inside jokes.

6. **Screen 6: A Special Message**
   - Deeply emotional letter with soft ambient corner auroras.
   - Inspirational quote banner and typewriter text effect.
   - Thoughtful sign-off and audio chime.

7. **Screen 7: The Big Birthday Surprise (The Climax)**
   - Dramatic suspense tease (*"Wait... You thought that was everything?"*).
   - Grand explosive birthday reveal with golden typography.
   - Realistic 3D animated birthday cake with glowing candles.
   - **Interactive Candle Blowing**: Tap/click "Blow Out The Candles" to simulate wind, extinguish flames with realistic smoke trails, and trigger celebration fanfare!
   - Golden confetti explosion & live canvas fireworks show with floating balloons.

8. **Screen 8: The Final Secret Surprise**
   - Mysterious locked vault item (*"One Last Secret..."*).
   - Unlocks a hidden photograph and heartfelt closing quote:
     > *"Keep smiling. Keep shining. And never stop being you."*
   - Copy keepsake card to clipboard & one-click experience replay.

---

## 🛠️ Tech Stack

- **React 18** + **Vite 5** (Blazing-fast modern build tooling)
- **Tailwind CSS** (Custom midnight, lavender, and champagne gold palette)
- **Framer Motion** (Buttery smooth cinematic transitions & spring physics)
- **Canvas Confetti** (Golden celebratory party confetti bursts)
- **Lucide React** (Clean, modern icons)
- **Web Audio API** (100% offline, procedural sound effects: wax seal break, sparkles, camera shutter, candle blower, and fanfare—zero external dependencies required!)

---

## 🎨 How to Customize

All texts, dates, names, photos, videos, and memories are configured in **one single file**:

👉 `src/data/birthdayData.js`

Open `src/data/birthdayData.js` in your editor to change:
- **Friend's Name**: e.g., `"Sujith"`
- **Birthday Date**: e.g., `"Special Day"`
- **Personal Letters & Paragraphs**: Edit any of the messages.
- **Friendship Milestones**: Add your own dates, stories, and categories.
- **Photo Captions & Video Details**.

---

## 📸 Adding Your Photos, Videos & Music

Place your files in the `public/media/` directory:

```
public/
  media/
    photos/
      photo1.jpeg
      photo2.jpeg
      photo3.jpeg
      photo4.jpeg
      photo5.jpeg
      photo6.jpeg
      photo7.jpeg
    videos/
      video1.mp4
    music/
      birthday-music.mp3
```

> **Note on Missing Media:**
> If any photo, video, or music file is missing, the website displays an artistic, high-definition fallback graphic and uses procedural Web Audio ambient music. The site will **never** show broken image icons or crash!

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## ☁️ Free 1-Click Deployment to Vercel

### Step 1: Push Code to GitHub
1. Open terminal in the project folder.
2. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for cinematic birthday surprise"
   ```
3. Create a new repository on [GitHub](https://github.com/new).
4. Link and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.
6. In ~30 seconds, Vercel will provide your live public URL (e.g., `https://your-birthday-surprise.vercel.app`)!

Send the link to Sujith and give him an unforgettable birthday surprise! ✨
