const emojis = [
  { emoji: '😴', size: 'w-14 h-14 text-2xl', pos: 'top-20 left-[8%]', anim: 'animate-float' },
  { emoji: '😤', size: 'w-12 h-12 text-xl', pos: 'top-32 right-[10%]', anim: 'animate-float-delay-1' },
  { emoji: '😊', size: 'w-16 h-16 text-3xl', pos: 'bottom-32 left-[12%]', anim: 'animate-float-delay-2' },
  { emoji: '🤩', size: 'w-10 h-10 text-lg', pos: 'top-40 left-[30%]', anim: 'animate-float-delay-3' },
  { emoji: '😌', size: 'w-12 h-12 text-xl', pos: 'bottom-24 right-[15%]', anim: 'animate-float-delay-4' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream grain-overlay overflow-hidden pt-16">
      {/* Floating emoji bubbles */}
      {emojis.map((e, i) => (
        <div
          key={i}
          className={`absolute ${e.pos} ${e.size} ${e.anim} rounded-full bg-blush-light flex items-center justify-center hidden sm:flex`}
        >
          {e.emoji}
        </div>
      ))}

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, fontWeight: 800 }}>
          <span className="text-text-dark">Makan sesuai</span>
          <br />
          <span className="text-coral italic">perasaanmu.</span>
        </h1>

        <p className="mt-6 text-text-muted-custom text-base sm:text-lg leading-relaxed max-w-xl mx-auto animate-fade-in-up animate-delay-200">
          Di sela padatnya jadwal kuliah di UC Makassar, waktu makan harusnya jadi momen recharge — bukan tambah stres karena bingung mau pesan apa.
        </p>

        <div className="mt-6 animate-fade-in-up animate-delay-400">
          <span className="inline-block bg-coral text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
            ✨ Isi sekali. Tau seterusnya.
          </span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
          <a
            href="#dukung"
            className="inline-block bg-coral text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-coral-dark hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Dukung MoodBites 💛
          </a>
          <a
            href="#tentang"
            className="inline-block border-2 border-coral text-coral font-semibold px-8 py-3 rounded-full hover:bg-coral hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
