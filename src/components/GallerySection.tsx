import { useState } from 'react';

// Menu data defined outside component for stable references
const ALL_MENUS = [
  { id: 1,  name: 'Nasi Goreng Merah',   category: 'Nasi & Mie',   desc: 'Nasi goreng khas dengan bumbu merah yang kaya rasa, porsi mengenyangkan.',        img: '/images/nasi-goreng-merah.jpg' },
  { id: 2,  name: 'Mie Goreng Jakarta',   category: 'Nasi & Mie',   desc: 'Cita rasa mie goreng ala ibukota, gurih dan cocok untuk semua mood.',             img: '/images/mie-goreng-jakarta.jpg' },
  { id: 3,  name: 'Mie Kering / Titi',    category: 'Nasi & Mie',   desc: 'Kuliner khas Makassar — mie renyah dengan kuah kental yang menggugah selera.',     img: '/images/mie-kering-titi.jpg' },
  { id: 4,  name: 'Paket Ayam Geprek',    category: 'Lauk Paket',   desc: 'Ayam crispy geprek dengan sambal pilihan level pedas, nasi, dan lalapan segar.',   img: '/images/ayam-geprek.jpg' },
  { id: 5,  name: 'Paket Telur Gimbal',   category: 'Lauk Paket',   desc: 'Telur dadar ala gimbal yang gurih, disajikan dengan nasi hangat dan sambal.',      img: '/images/telur-gimbal.jpg' },
  { id: 6,  name: 'Bakso Kuah',           category: 'Bakso & Kuah', desc: 'Bakso sapi kenyal dalam kuah kaldu bening hangat yang menenangkan.',                img: '/images/bakso-kuah.jpg' },
  { id: 7,  name: 'Beef Teriyaki',        category: 'Lauk Paket',   desc: 'Daging sapi lembut dengan saus teriyaki manis-gurih khas Jepang.',                 img: '/images/beef-teriyaki.jpg' },
  { id: 8,  name: 'Beef Patty',           category: 'Lauk Paket',   desc: 'Patty daging sapi juicy yang cocok dimakan sendiri atau dengan nasi.',             img: '/images/beef-patty.jpg' },
  { id: 9,  name: 'Kentang Goreng',       category: 'Gorengan',     desc: 'Kentang goreng crispy golden — camilan atau pendamping menu utama.',                img: '/images/kentang-goreng.jpg' },
  { id: 10, name: 'Ubi Goreng',           category: 'Gorengan',     desc: 'Ubi goreng manis-gurih, pilihan gorengan lokal yang mengenyangkan.',                img: '/images/ubi-goreng.jpg' },
  { id: 11, name: 'Aneka Indomie',        category: 'Indomie',      desc: 'Berbagai varian Indomie — goreng, kuah, geprek — comfort food sejati mahasiswa.',   img: '/images/indomie.jpg' },
  { id: 12, name: 'Menu Prasmanan',       category: 'Prasmanan',    desc: 'Pilihan lauk-pauk dan sayur prasmanan yang bervariasi setiap harinya.',             img: '/images/prasmanan.jpg' },
];

const CATEGORIES = ['Semua', 'Nasi & Mie', 'Lauk Paket', 'Gorengan', 'Bakso & Kuah', 'Indomie', 'Prasmanan'];

const MenuCard = ({ item }: { item: typeof ALL_MENUS[number] }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="reveal bg-cream rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 group overflow-hidden">
      {!imgError ? (
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full aspect-[4/3] object-cover rounded-t-2xl block"
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-blush-light rounded-t-2xl flex items-center justify-center text-5xl">
          🍽️
        </div>
      )}
      <div className="p-4">
        <span className="inline-block bg-blush-mid text-text-muted-custom text-[0.7rem] font-medium px-2.5 py-0.5 rounded-full mb-2">
          {item.category}
        </span>
        <h3 className="font-bold text-text-dark text-sm mb-1">{item.name}</h3>
        <p className="text-text-muted-custom text-xs leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const filtered = activeFilter === 'Semua' ? ALL_MENUS : ALL_MENUS.filter(m => m.category === activeFilter);

  return (
    <section id="menu" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-2">
          Menu yang Bisa Kamu Nikmati 🍜
        </h2>
        <p className="reveal text-center text-text-muted-custom mb-8">
          Menu andalan tetap dari kantin mitra kami — pilih sesuai seleramu hari ini.
        </p>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-coral text-primary-foreground'
                  : 'bg-blush-light text-text-muted-custom hover:bg-blush-mid'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <p className="reveal text-center mt-8 text-sm italic text-text-muted-custom">
          <span className="inline-block bg-coral/15 text-coral px-3 py-1 rounded-full mr-2 not-italic text-xs font-medium">🔄</span>
          Menu prasmanan bervariasi setiap hari — selalu ada pilihan baru yang segar untukmu.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
