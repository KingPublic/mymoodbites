const steps = [
  { emoji: '📱', title: 'Isi Preferensimu Sekali', body: 'Di aplikasi mobile MoodBites, kamu isi alergi, pantangan, selera rasa, dan rentang budget — cukup satu kali.' },
  { emoji: '🚶', title: 'Datang ke Kiosk Mitra', body: 'Temukan kiosk MoodBites di kantin dan area F&B kampus UC Makassar. Tap NFC atau scan untuk mulai.' },
  { emoji: '😊', title: 'Biarkan Sistem Membaca Moodmu', body: 'Tatap kamera sebentar. Sistem kami mendeteksi emosi secara real-time — tanpa menyimpan fotomu sama sekali.' },
  { emoji: '🍜', title: 'Terima Rekomendasimu Instantly', body: 'Kiosk langsung tampilkan menu terbaik berdasarkan moodmu, preferensimu, dan histori pembelian — siap dipesan!' },
];

const SolutionSection = () => (
  <section id="tentang" className="bg-cream py-20 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-8">
        Kenalan sama <span className="text-coral">MoodBites</span>
      </h2>
      <p className="reveal text-center text-text-muted-custom text-lg leading-relaxed mb-14">
        <span className="text-coral italic">MoodBites</span> lahir dari satu momen sederhana: seorang mahasiswa yang kelelahan, berdiri bingung di kantin, dan akhirnya skip makan karena terlalu overwhelmed untuk memilih.
      </p>

      {/* Timeline */}
      <div className="relative pl-8 border-l-2 border-coral/40 space-y-10">
        {steps.map((s, i) => (
          <div key={i} className="reveal relative" style={{ transitionDelay: `${i * 150}ms` }}>
            <div className="absolute -left-[25px] w-10 h-10 rounded-full bg-coral flex items-center justify-center text-lg text-primary-foreground">
              {s.emoji}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-bold text-text-dark mb-1">{s.title}</h3>
              <p className="text-text-muted-custom leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="reveal mt-14 bg-coral rounded-2xl p-8 text-center">
        <p className="text-primary-foreground text-xl sm:text-2xl font-bold">
          Dari "lama dan bingung" → "mudah dan efisien"
        </p>
      </div>
    </div>
  </section>
);

export default SolutionSection;
