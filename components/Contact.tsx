import ContactForm from "./ContactForm";

const info = [
  { icon: "📍", label: "Alamat", value: "Jl. Jend. Sudirman No. 123, Jakarta Pusat 10220" },
  { icon: "📞", label: "Telepon", value: "(021) 1234 5678" },
  { icon: "✉️", label: "Email", value: "info@ptxyz.co.id" },
  { icon: "🕘", label: "Jam Operasional", value: "Senin – Jumat, 08.00 – 17.00 WIB" },
];

export default function Contact() {
  return (
    <section id="kontak" className="section-alt">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Kontak</p>
          <h2>Mari berdiskusi</h2>
          <p className="contact-lead">
            Punya pertanyaan atau ingin bekerja sama? Tim kami siap membantu.
          </p>
          <ul className="contact-info">
            {info.map((item) => (
              <li key={item.label}>
                {item.icon}
                <div>
                  <b>{item.label}</b>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
