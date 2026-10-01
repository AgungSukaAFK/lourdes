import Image from "next/image";
import { images } from "@/lib/images";
import { industries, site, yearsOfExperience } from "@/lib/site";

export default function About() {
  const main = images["mining-truck"];

  return (
    <section id="tentang" aria-labelledby="tentang-title">
      <div className="container about-grid">
        <div className="about-media">
          <Image
            src={main.src}
            alt={main.alt}
            placeholder="blur"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="about-badge">
            <strong>{yearsOfExperience}+</strong>
            <span>Tahun Pengalaman</span>
          </div>
        </div>
        <div className="about-text">
          <p className="eyebrow">Tentang Kami</p>
          <h2 id="tentang-title">
            Spesialis suku cadang kelistrikan otomotif sejak {site.foundingYear}
          </h2>
          <p>
            <strong>{site.name}</strong> adalah perusahaan penyedia barang dan
            jasa yang bergerak di bidang <em>electrical spare parts</em> untuk
            industri pertambangan, perhutanan, serta minyak &amp; gas (
            <em>Oil &amp; Gas</em>) guna memenuhi kebutuhan konsumen di seluruh
            wilayah Indonesia.
          </p>
          <p>
            Dengan pengalaman lebih dari {yearsOfExperience} tahun, kami
            berkomitmen memberikan pengalaman pelanggan terbaik melalui produk
            yang andal dan layanan yang responsif.
          </p>
        </div>
      </div>

      <div className="container">
        <h3 className="subheading">Industri yang Kami Layani</h3>
        <div className="industry-grid">
          {industries.map((item) => {
            const img = images[item.image];
            return (
              <article className="industry-card" key={item.title}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  placeholder="blur"
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <div className="industry-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
