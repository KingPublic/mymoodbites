import { useState } from 'react';

const categories = ['Semua', 'Nasi & Mie', 'Lauk Paket', 'Gorengan', 'Bakso & Kuah', 'Indomie', 'Prasmanan'];

const products = [
  { emoji: '🍳', name: 'Nasi Goreng Merah', tag: 'Nasi & Mie', desc: 'Nasi goreng khas dengan bumbu merah yang kaya rasa, porsi mengenyangkan.' },
  { emoji: '🍜', name: 'Mie Goreng Jakarta', tag: 'Nasi & Mie', desc: 'Cita rasa mie goreng ala ibukota, gurih dan cocok untuk semua mood.' },
  { emoji: '🍝', name: 'Mie Kering / Titi', tag: 'Nasi & Mie', desc: 'Kuliner khas Makassar — mie renyah dengan kuah kental yang menggugah selera.' },
  { emoji: '🍗', name: 'Paket Ayam Geprek', tag: 'Lauk Paket', desc: 'Ayam crispy geprek dengan sambal pilihan level pedas, nasi, dan lalapan segar.' },
  { emoji: '🍳', name: 'Paket Telur Gimbal', tag: 'Lauk Paket', desc: 'Telur dadar ala gimbal yang gurih, disajikan dengan nasi hangat dan sambal.' },
  { emoji: '🍲', name: 'Bakso Kuah', tag: 'Bakso & Kuah', desc: 'Bakso sapi kenyal dalam kuah kaldu bening hangat yang menenangkan.' },
  { emoji: '🥩', name: 'Beef Teriyaki', tag: 'Lauk Paket', desc: 'Daging sapi lembut dengan saus teriyaki manis-gurih khas Jepang.' },
  { emoji: '🍔', name: 'Beef Patty', tag: 'Lauk Paket', desc: 'Patty daging sapi juicy yang cocok dimakan sendiri atau dengan nasi.' },
  { emoji: '🍟', name: 'Kentang Goreng', tag: 'Gorengan', desc: 'Kentang goreng crispy golden — camilan atau pendamping menu utama.' },
  { emoji: '🍠', name: 'Ubi Goreng', tag: 'Gorengan', desc: 'Ubi goreng manis-gurih, pilihan gorengan lokal yang mengenyangkan.' },
  { emoji: '🍜', name: 'Aneka Indomie', tag: 'Indomie', desc: 'Berbagai varian Indomie — goreng, kuah, geprek — comfort food sejati mahasiswa.' },
  { emoji: '🍱', name: 'Menu Prasmanan Harian', tag: 'Prasmanan', desc: 'Pilihan lauk-pauk dan sayur prasmanan yang berubah setiap hari, selalu segar dan variatif.' },
];

const GallerySection = () => {
  const [active, setActive] = useState('Semua');
  const filtered = active === 'Semua' ? products : products.filter((p) => p.tag === active);

  return (
    <section className="bg-blush-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-2">
          Menu Favorit yang Siap Direkomendasikan 🍜
        </h2>
        <p className="reveal text-center text-text-muted-custom mb-8">
          Dari menu andalan tetap hingga sajian prasmanan harian — semua bisa <span className="text-coral">MoodBites</span> rekomendasikan sesuai moodmu.
        </p>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === c
                  ? 'bg-coral text-primary-foreground'
                  : 'bg-cream text-text-dark hover:bg-blush-mid'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="reveal bg-cream rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-bold text-text-dark text-sm mb-1">{p.name}</h3>
              <p className="text-text-muted-custom text-xs leading-relaxed mb-3">{p.desc}</p>
              <span className="inline-block bg-coral/15 text-coral text-xs font-medium px-3 py-0.5 rounded-full">
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-sm italic text-text-muted-custom">
          <span className="inline-block bg-coral/15 text-coral px-3 py-1 rounded-full mr-2 not-italic text-xs font-medium">🔄</span>
          Menu prasmanan berubah setiap hari — <span className="text-coral">MoodBites</span> selalu update rekomendasi secara real-time sesuai ketersediaan menu.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
