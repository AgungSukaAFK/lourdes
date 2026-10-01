const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "300+", label: "Klien Puas" },
  { value: "120+", label: "Karyawan" },
  { value: "20", label: "Kota Terlayani" },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
