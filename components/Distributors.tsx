import { distributors } from "@/lib/site";
import Icon from "./Icon";

export default function Distributors() {
  return (
    <section
      id="distributor"
      className="section-alt"
      aria-labelledby="distributor-title"
    >
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Distributor Resmi</p>
          <h2 id="distributor-title">Dapatkan produk kami melalui</h2>
        </div>
        <div className="dist-grid">
          {distributors.map((d) => (
            <address className="dist-card" key={d.name}>
              <h3>{d.name}</h3>
              <ul>
                <li>
                  <Icon name="pin" size={18} />
                  <span>{d.address}</span>
                </li>
                <li>
                  <Icon name="phone" size={18} />
                  <a href={`tel:${d.phoneHref}`}>{d.phone}</a>
                </li>
                <li>
                  <Icon name="globe" size={18} />
                  <a href={d.web} target="_blank" rel="noopener">
                    {d.web.replace("https://", "")}
                  </a>
                </li>
              </ul>
            </address>
          ))}
        </div>
      </div>
    </section>
  );
}
