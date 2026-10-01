const services = [
  {
    icon: "📊",
    title: "Konsultasi Bisnis",
    desc: "Analisis strategi, perencanaan, dan pendampingan untuk mengoptimalkan kinerja perusahaan.",
  },
  {
    icon: "💻",
    title: "Solusi Teknologi",
    desc: "Pengembangan sistem, aplikasi, dan transformasi digital sesuai kebutuhan bisnis.",
  },
  {
    icon: "🚚",
    title: "Logistik & Distribusi",
    desc: "Manajemen rantai pasok yang efisien dengan jangkauan distribusi nasional.",
  },
  {
    icon: "👥",
    title: "Manajemen SDM",
    desc: "Rekrutmen, pelatihan, dan pengelolaan tenaga kerja yang profesional.",
  },
  {
    icon: "🛡️",
    title: "Manajemen Risiko",
    desc: "Identifikasi dan mitigasi risiko untuk menjaga keberlangsungan usaha.",
  },
  {
    icon: "🤝",
    title: "Kemitraan Strategis",
    desc: "Menghubungkan bisnis Anda dengan jaringan mitra yang luas dan terpercaya.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section-alt">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Layanan Kami</p>
          <h2>Solusi menyeluruh untuk kebutuhan bisnis Anda</h2>
          <p>
            Kami menyediakan berbagai layanan yang dirancang untuk mendukung
            efisiensi dan pertumbuhan perusahaan.
          </p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
