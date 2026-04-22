const features = [
  { emoji: '🧠', title: 'Deteksi Mood Real-Time', body: 'Kamera kiosk membaca ekspresi wajahmu secara instan. Privasi terjaga — nol foto tersimpan.' },
  { emoji: '📋', title: 'Preferensi Tersimpan Selamanya', body: 'Isi satu kali di HP, dipakai terus-menerus. Alergi, pantangan, budget — semua diingat sistem.' },
  { emoji: '📡', title: 'Transfer Data via NFC', body: 'Tap HP ke kiosk — semua preferensimu langsung terbaca. Cepat, mudah, tanpa login ulang.' },
  { emoji: '🤖', title: 'Algoritma Rekomendasi Cerdas', body: 'Machine learning yang memadukan mood, preferensi, histori, dan menu tersedia jadi satu saran sempurna.' },
  { emoji: '📱', title: 'Companion App Mobile', body: 'Kelola preferensi, lihat histori makan, dan jelajahi menu mitra — langsung dari genggaman tanganmu.' },
  { emoji: '🔒', title: 'Privasi Utama', body: 'Data wajahmu tidak pernah disimpan. Deteksi mood berjalan lokal, real-time, dan langsung terhapus.' },
];

const FeaturesSection = () => (
  <section id="fitur" className="bg-blush-light py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
        Kenapa <span className="text-coral">MoodBites</span> Beda? ✨
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="reveal bg-cream rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-full bg-coral/15 flex items-center justify-center text-xl mb-4">
              {f.emoji}
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-2">{f.title}</h3>
            <p className="text-text-muted-custom leading-relaxed text-sm">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
