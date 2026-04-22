const team = [
  { name: 'Gilbert De Foucauld Winardy', role: 'Perancang Aplikasi & Sistem (IMT-FSD)', nim: '0806022310001', emoji: '🎨' },
  { name: 'Andrey Hartawan Suwardi', role: 'Pembuatan Algoritma ML (IMT-AI)', nim: '0806022310021', emoji: '🤖' },
  { name: 'Jason Bintang Setiawan', role: 'Pembuatan Algoritma ML (IMT-AI)', nim: '0806022310011', emoji: '🧠' },
];

const TeamSection = () => (
  <section className="bg-blush-light py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark mb-2">
        Tim di Balik <span className="text-coral">MoodBites</span> 👋
      </h2>
      <p className="reveal text-lg font-semibold text-text-dark mb-1">Kelompok 9 — Food & Beverage Enterprise, 2026</p>
      <p className="reveal text-text-muted-custom mb-12">Universitas Ciputra Makassar</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {team.map((t, i) => (
          <div
            key={i}
            className="reveal bg-cream rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center text-3xl mx-auto mb-4">
              {t.emoji}
            </div>
            <h3 className="font-bold text-text-dark text-sm mb-1">{t.name}</h3>
            <p className="text-text-muted-custom text-xs mb-1">{t.role}</p>
            <p className="text-text-muted-custom text-xs font-mono">{t.nim}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
