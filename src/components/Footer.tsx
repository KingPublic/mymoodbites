const links = ['Tentang', 'Fitur', 'Mitra', 'Support'];

const Footer = () => (
  <footer className="bg-footer-bg py-12 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-2xl font-bold text-primary-foreground mb-2">MoodBites 🍜</p>
      <p className="text-primary-foreground/60 text-sm mb-6 italic">
        Makan sesuai perasaanmu, kapan saja.
      </p>

      <div className="flex justify-center gap-6 mb-4">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            {l}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <a
          href="https://miro.com/app/board/uXjVHe0w118=/?share_link_id=367930657801"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground border border-primary-foreground/30 rounded-full px-4 py-1.5 transition-colors"
        >
          🎨 Miro
        </a>
        <a
          href="https://github.com/roczantya/moodbites-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground border border-primary-foreground/30 rounded-full px-4 py-1.5 transition-colors"
        >
          💻 GitHub Frontend
        </a>
        <a
          href="https://www.figma.com/design/b7QQudzj1mNYk0mprMvSgc/moodBites?node-id=0-1&t=AfbSH7ZqKCfQpBSl-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground border border-primary-foreground/30 rounded-full px-4 py-1.5 transition-colors"
        >
          🖌️ Figma
        </a>
      </div>

      <p className="text-primary-foreground/50 text-xs mb-1">
        © 2026 Kelompok 9 — Universitas Ciputra Makassar · Food & Beverage Enterprise
      </p>
      <p className="text-primary-foreground/40 text-xs">
        Proyek riset akademis. Bukan produk komersial.
      </p>
    </div>
  </footer>
);

export default Footer;
