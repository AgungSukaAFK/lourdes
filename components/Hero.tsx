import Image from "next/image";
import { images } from "@/lib/images";
import { categories, site, yearsOfExperience } from "@/lib/site";

const stats = [
  { value: `${yearsOfExperience}+`, label: "Tahun Pengalaman" },
  { value: "2.000+", label: "Jenis Suku Cadang" },
  { value: `${categories.length}`, label: "Kategori Produk" },
  { value: "3", label: "Sektor Industri" },
];

export default function Hero() {
  const hero = images["hero-mining-trucks"];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Sejak {site.foundingYear} · Seluruh Indonesia</p>
        <h1 id="hero-title">
          {site.name}: <span>{site.tagline}</span>
        </h1>
        <p className="hero-lead">
          Penyedia pengalaman pelanggan terbaik dalam produk dan layanan
          kelistrikan otomotif untuk industri pertambangan, kehutanan, serta
          minyak &amp; gas.
        </p>
        <div className="hero-actions">
          <a href="#produk" className="btn btn-primary">
            Lihat Produk
          </a>
          <a href="#kontak" className="btn btn-outline">
            Hubungi Kami
          </a>
        </div>
        <dl className="hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
