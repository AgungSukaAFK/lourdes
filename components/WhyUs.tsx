import { advantages } from "@/lib/site";
import Icon from "./Icon";

export default function WhyUs() {
  return (
    <section className="section-dark" aria-labelledby="keunggulan-title">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Mengapa Memilih Kami</p>
          <h2 id="keunggulan-title">Keunggulan Lourdes Autoparts</h2>
          <p>
            Kami memahami bahwa downtime di lapangan sangat mahal. Karena itu
            kami fokus pada kualitas, ketersediaan stok, dan harga yang tepat.
          </p>
        </div>
        <div className="why-grid">
          {advantages.map((a) => (
            <div className="why-card" key={a.title}>
              <div className="why-icon">
                <Icon name={a.icon} size={26} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
