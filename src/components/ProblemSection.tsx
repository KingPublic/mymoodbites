const problems = [
  { emoji: '🕐', title: '5–10 Menit Terbuang', body: 'Berdiri di depan papan menu, capek setelah kelas, dan tetap nggak tau mau makan apa.' },
  { emoji: '😵‍💫', title: 'Choice Paralysis Nyata', body: 'Terlalu banyak pilihan, terlalu sedikit energi untuk mikir. Akhirnya asal pilih — dan nyesel.' },
  { emoji: '🍽️', title: 'Menu yang Nggak Relevan', body: 'Daftar menu panjang tanpa panduan. Nggak ada yang tahu kamu lagi stres dan butuh comfort food.' },
];

const ProblemSection = () => (
  <section className="bg-blush-light py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">
        Kamu pasti pernah ngerasain ini...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div
            key={i}
            className="reveal bg-cream rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-full bg-coral/15 flex items-center justify-center text-2xl mb-4">
              {p.emoji}
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-2">{p.title}</h3>
            <p className="text-text-muted-custom leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
