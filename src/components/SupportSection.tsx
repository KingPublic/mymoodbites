const SupportSection = () => (
  <section id="dukung" className="bg-coral py-20 px-4 relative overflow-hidden">
    {/* Floating decorative emoji */}
    <span className="absolute top-10 left-[5%] text-6xl opacity-15">🍜</span>
    <span className="absolute bottom-10 right-[8%] text-7xl opacity-10">🍱</span>
    <span className="absolute top-1/2 right-[20%] text-5xl opacity-10">😊</span>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
        Bantu kami wujudkan pengalaman makan yang lebih baik.
      </h2>
      <p className="reveal text-primary-foreground/90 text-lg leading-relaxed mb-10">
        <span className="font-semibold">MoodBites</span> masih dalam tahap pengembangan sebagai proyek riset mahasiswa UC Makassar. Dukungan dan feedback kamu sangat berarti untuk membawa sistem ini ke kantin kampus nyata — kapan pun kamu lapar.
      </p>

      <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button className="bg-cream text-coral font-semibold px-8 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all text-lg">
          💛 Dukung / Support Us
        </button>
        <button className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary-foreground/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
          📩 Kasih Feedback
        </button>
      </div>

      <p className="reveal text-primary-foreground/60 text-sm">
        Bergabung bersama mahasiswa UC Makassar yang percaya setiap momen makan bisa lebih mudah dan menyenangkan.
      </p>
    </div>
  </section>
);

export default SupportSection;
