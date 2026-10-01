export default function Clients() {
  return (
    <section id="klien">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Klien Kami</p>
          <h2>Dipercaya oleh berbagai perusahaan</h2>
        </div>
        <div className="clients">
          {Array.from({ length: 6 }, (_, i) => (
            <div className="client" key={i}>
              LOGO
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
