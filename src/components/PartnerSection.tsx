const menuPills = [
  'Nasi Goreng Merah', 'Mie Kering/Titi', 'Ayam Geprek', 'Bakso Kuah',
  'Beef Teriyaki', 'Beef Patty', 'Kentang Goreng', 'Ubi Goreng', 'Aneka Indomie', 'Prasmanan Harian',
];

const stats = [
  { emoji: '🍽️', label: '11+ Menu Tetap' },
  { emoji: '🔄', label: 'Prasmanan Berubah Tiap Hari' },
  { emoji: '🤝', label: 'Mitra Resmi MoodBites' },
];

const PartnerSection = () => (
  <section id="mitra" className="bg-cream py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-2">
        Mitra UMKM Kantin UC Makassar 🤝
      </h2>
      <p className="reveal text-center text-text-muted-custom mb-12">
        <span className="text-coral">MoodBites</span> bermitra langsung dengan tenant F&B di kampus untuk memastikan rekomendasi menu yang akurat dan real-time.
      </p>

      {/* Featured card */}
      <div className="reveal bg-cream border border-blush-mid rounded-2xl shadow-sm p-8 relative overflow-hidden border-l-4 border-l-coral mb-8">
        <span className="absolute top-4 right-4 bg-coral text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          ✅ Mitra Utama
        </span>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-16 h-16 rounded-full bg-coral/15 flex items-center justify-center text-3xl shrink-0">🏪</div>
          <div>
            <h3 className="text-xl font-bold text-text-dark">Kantin Universitas Ciputra Makassar</h3>
            <p className="text-text-muted-custom text-sm">📍 Area Kampus UC Makassar</p>
          </div>
        </div>
        <p className="text-text-muted-custom leading-relaxed mb-6">
          Kantin utama kampus UC Makassar yang menjadi pusat kuliner mahasiswa sehari-hari. Menyediakan menu tetap andalan yang konsisten dan sajian prasmanan segar yang bervariasi setiap harinya.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {menuPills.map((m) => (
            <span key={m} className="bg-blush-light text-text-dark text-xs px-3 py-1 rounded-full">{m}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-blush-light rounded-xl p-3 text-center">
              <span className="text-lg">{s.emoji}</span>
              <p className="text-xs font-medium text-text-dark mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs italic text-text-muted-custom">
          *Pendataan variasi menu, harga, dan komposisi rasa dilakukan bersama mitra secara langsung.*
        </p>
      </div>

      {/* Coming soon cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { emoji: '☕', title: 'Kafe & Area Vending Kampus', desc: 'Spot santai recharge antar kelas.', badge: 'Coming Soon' },
          { emoji: '🏪', title: 'Tenant F&B Ekspansi', desc: 'Mitra baru sedang dalam proses onboarding.', badge: 'Segera Hadir' },
        ].map((c) => (
          <div key={c.title} className="reveal bg-blush-light rounded-2xl p-6 border-2 border-dashed border-blush-mid text-center">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h3 className="font-bold text-text-dark mb-1">{c.title}</h3>
            <p className="text-text-muted-custom text-sm mb-3">{c.desc}</p>
            <span className="bg-coral text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">{c.badge}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSection;
