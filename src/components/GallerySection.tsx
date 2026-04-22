import { useState } from 'react';
import foodNasiGoreng from '@/assets/food-nasi-goreng.jpg';
import foodMieGoreng from '@/assets/food-mie-goreng.jpg';
import foodMieTiti from '@/assets/food-mie-titi.jpg';
import foodAyamGeprek from '@/assets/food-ayam-geprek.jpg';
import foodTelurGimbal from '@/assets/food-telur-gimbal.jpg';
import foodBakso from '@/assets/food-bakso.jpg';
import foodBeefTeriyaki from '@/assets/food-beef-teriyaki.jpg';
import foodBeefPatty from '@/assets/food-beef-patty.jpg';
import foodKentangGoreng from '@/assets/food-kentang-goreng.jpg';
import foodUbiGoreng from '@/assets/food-ubi-goreng.jpg';
import foodIndomie from '@/assets/food-indomie.jpg';
import foodPrasmanan from '@/assets/food-prasmanan.jpg';

const categories = ['Semua', 'Nasi & Mie', 'Lauk Paket', 'Gorengan', 'Bakso & Kuah', 'Indomie', 'Prasmanan'];

const products = [
  { img: foodNasiGoreng, name: 'Nasi Goreng Merah', tag: 'Nasi & Mie', desc: 'Nasi goreng khas dengan bumbu merah yang kaya rasa, porsi mengenyangkan.' },
  { img: foodMieGoreng, name: 'Mie Goreng Jakarta', tag: 'Nasi & Mie', desc: 'Cita rasa mie goreng ala ibukota, gurih dan cocok untuk semua mood.' },
  { img: foodMieTiti, name: 'Mie Kering / Titi', tag: 'Nasi & Mie', desc: 'Kuliner khas Makassar — mie renyah dengan kuah kental yang menggugah selera.' },
  { img: foodAyamGeprek, name: 'Paket Ayam Geprek', tag: 'Lauk Paket', desc: 'Ayam crispy geprek dengan sambal pilihan level pedas, nasi, dan lalapan segar.' },
  { img: foodTelurGimbal, name: 'Paket Telur Gimbal', tag: 'Lauk Paket', desc: 'Telur dadar ala gimbal yang gurih, disajikan dengan nasi hangat dan sambal.' },
  { img: foodBakso, name: 'Bakso Kuah', tag: 'Bakso & Kuah', desc: 'Bakso sapi kenyal dalam kuah kaldu bening hangat yang menenangkan.' },
  { img: foodBeefTeriyaki, name: 'Beef Teriyaki', tag: 'Lauk Paket', desc: 'Daging sapi lembut dengan saus teriyaki manis-gurih khas Jepang.' },
  { img: foodBeefPatty, name: 'Beef Patty', tag: 'Lauk Paket', desc: 'Patty daging sapi juicy yang cocok dimakan sendiri atau dengan nasi.' },
  { img: foodKentangGoreng, name: 'Kentang Goreng', tag: 'Gorengan', desc: 'Kentang goreng crispy golden — camilan atau pendamping menu utama.' },
  { img: foodUbiGoreng, name: 'Ubi Goreng', tag: 'Gorengan', desc: 'Ubi goreng manis-gurih, pilihan gorengan lokal yang mengenyangkan.' },
  { img: foodIndomie, name: 'Aneka Indomie', tag: 'Indomie', desc: 'Berbagai varian Indomie — goreng, kuah, geprek — comfort food sejati mahasiswa.' },
  { img: foodPrasmanan, name: 'Menu Prasmanan Harian', tag: 'Prasmanan', desc: 'Pilihan lauk-pauk dan sayur prasmanan yang berubah setiap hari, selalu segar dan variatif.' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const filtered = activeFilter === 'Semua' ? [...products] : products.filter((p) => p.tag === activeFilter);

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
              onClick={() => setActiveFilter(c)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === c
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
              key={p.name}
              className="reveal bg-cream rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 group overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={672}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-text-dark text-sm mb-1">{p.name}</h3>
                <p className="text-text-muted-custom text-xs leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-block bg-coral/15 text-coral text-xs font-medium px-3 py-0.5 rounded-full">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-sm italic text-text-muted-custom">
          <span className="inline-block bg-coral/15 text-coral px-3 py-1 rounded-full mr-2 not-italic text-xs font-medium">🔄</span>
          Menu prasmanan berubah setiap hari — selalu ada pilihan baru yang segar untukmu.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
