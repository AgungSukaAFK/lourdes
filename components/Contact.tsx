import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Kontak</p>
          <h2 id="kontak-title">Butuh suku cadang kelistrikan?</h2>
          <p className="contact-lead">
            Kirimkan kebutuhan atau daftar part Anda. Tim kami akan segera
            membantu dengan informasi stok dan penawaran harga terbaik.
          </p>
          <ul className="contact-info">
            <li>
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <div>
                <b>Email</b>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Icon name="clock" />
              </span>
              <div>
                <b>Jam Operasional</b>
                <span>{site.hours}</span>
              </div>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
