import { useState } from 'react';

const ALL_MENUS = [
  { id: 1,  name: "Nasi Goreng Merah",   category: "Nasi & Mie",   desc: "Nasi goreng khas dengan bumbu merah yang kaya rasa.",            img: "/images/nasi-goreng-merah.jpg" },
  { id: 2,  name: "Mie Goreng Jakarta",   category: "Nasi & Mie",   desc: "Cita rasa mie goreng ala ibukota, gurih dan cocok untuk semua mood.", img: "/images/mie-goreng-jakarta.jpg" },
  { id: 3,  name: "Mie Kering / Titi",    category: "Nasi & Mie",   desc: "Kuliner khas Makassar — mie renyah dengan kuah kental.",         img: "/images/mie-kering-titi.jpg" },
  { id: 4,  name: "Paket Ayam Geprek",    category: "Lauk Paket",   desc: "Ayam crispy geprek dengan sambal pilihan dan nasi.",             img: "/images/ayam-geprek.jpg" },
  { id: 5,  name: "Paket Telur Gimbal",   category: "Lauk Paket",   desc: "Telur dadar gimbal gurih dengan nasi hangat dan sambal.",        img: "/images/telur-gimbal.jpg" },
  { id: 6,  name: "Bakso Kuah",           category: "Bakso & Kuah", desc: "Bakso sapi kenyal dalam kuah kaldu bening hangat.",              img: "/images/bakso-kuah.jpg" },
  { id: 7,  name: "Beef Teriyaki",        category: "Lauk Paket",   desc: "Daging sapi lembut dengan saus teriyaki manis-gurih.",           img: "/images/beef-teriyaki.jpg" },
  { id: 8,  name: "Beef Patty",           category: "Lauk Paket",   desc: "Patty daging sapi juicy cocok dimakan dengan nasi.",             img: "/images/beef-patty.jpg" },
  { id: 9,  name: "Kentang Goreng",       category: "Gorengan",     desc: "Kentang goreng crispy golden sebagai camilan atau pendamping.",   img: "/images/kentang-goreng.jpg" },
  { id: 10, name: "Ubi Goreng",           category: "Gorengan",     desc: "Ubi goreng manis-gurih, pilihan gorengan lokal.",                img: "/images/ubi-goreng.jpg" },
  { id: 11, name: "Aneka Indomie",        category: "Indomie",      desc: "Berbagai varian Indomie — goreng, kuah, geprek.",                img: "/images/indomie.jpg" },
  { id: 12, name: "Menu Prasmanan",       category: "Prasmanan",    desc: "Lauk-pauk dan sayur prasmanan yang bervariasi setiap hari.",     img: "/images/prasmanan.jpg" },
];

const CATEGORIES = ["Semua", "Nasi & Mie", "Lauk Paket", "Gorengan", "Bakso & Kuah", "Indomie", "Prasmanan"];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const filtered = activeFilter === "Semua" ? ALL_MENUS : ALL_MENUS.filter(m => m.category === activeFilter);

  console.log("Filtered menu items:", filtered.length, "activeFilter:", activeFilter);

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
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8" style={{ scrollbarWidth: 'none' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                whiteSpace: 'nowrap',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: 'none',
                background: activeFilter === cat ? '#FF9494' : '#FFE3E1',
                color: activeFilter === cat ? '#ffffff' : '#7A5C5C',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {filtered.map(item => (
            <div
              key={item.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderRadius: '20px 20px 0 0' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div style={{ padding: '12px' }}>
                <span style={{ background: '#FFD1D1', color: '#7A5C5C', borderRadius: '999px', padding: '2px 10px', fontSize: '0.72rem' }}>
                  {item.category}
                </span>
                <p style={{ fontWeight: 700, margin: '8px 0 4px', color: '#2D2020' }}>{item.name}</p>
                <p style={{ color: '#7A5C5C', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
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
