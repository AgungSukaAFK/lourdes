import Image from "next/image";
import { images } from "@/lib/images";
import { categories } from "@/lib/site";
import Icon from "./Icon";

export default function Products() {
  const banner = images["cable-coil"];

  return (
    <section id="produk" className="section-alt" aria-labelledby="produk-title">
      <div className="container products-grid">
        <div>
          <p className="eyebrow">Produk &amp; Layanan</p>
          <h2 id="produk-title">Kategori produk kelistrikan otomotif</h2>
          <p className="muted">
            Lebih dari 2.000 jenis suku cadang kelistrikan tersedia — mulai dari
            ribuan kabel, terminal, dan konektor hingga perangkat keselamatan
            mesin dan pencahayaan LED untuk truk dan alat berat.
          </p>
          <div className="products-media">
            <Image
              src={banner.src}
              alt={banner.alt}
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
        <ul className="category-list">
          {categories.map((c) => (
            <li key={c}>
              <span className="category-check">
                <Icon name="check" size={16} />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
