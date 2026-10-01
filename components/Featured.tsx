import Image from "next/image";
import { images } from "@/lib/images";
import { featuredProducts } from "@/lib/site";

export default function Featured() {
  return (
    <section id="unggulan" aria-labelledby="unggulan-title">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Produk Unggulan</p>
          <h2 id="unggulan-title">Produk populer pilihan pelanggan</h2>
          <p>
            Solusi keselamatan dan kelistrikan yang paling banyak digunakan di
            lapangan.
          </p>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((p) => {
            const img = images[p.image];
            return (
              <article className="product-card" key={p.name}>
                <div className="product-media">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  />
                </div>
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a href="#kontak" className="product-link">
                    Tanyakan produk →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
