export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lourdes.cloud"
).replace(/\/$/, "");

export const site = {
  name: "Lourdes Autoparts",
  tagline: "Best Automotive Electrical Product & Services",
  description:
    "Lourdes Autoparts — penyedia suku cadang kelistrikan otomotif (electrical spare parts) untuk industri pertambangan, kehutanan, serta minyak & gas di seluruh Indonesia sejak 2009.",
  foundingYear: 2009,
  email: "info@lourdesautoparts.com",
  hours: "Senin – Jumat, 08.00 – 17.00 WIB",
  keywords: [
    "Lourdes Autoparts",
    "suku cadang kelistrikan otomotif",
    "electrical spare parts",
    "sparepart kelistrikan alat berat",
    "sparepart tambang",
    "speed limiter truk",
    "loto box",
    "bracket APAR",
    "lampu LED truk",
    "work lamp",
    "backup alarm",
    "kabel otomotif",
    "terminal crimp",
    "konektor",
    "fuse",
    "relay",
    "circuit breaker",
    "Bekasi",
    "Indonesia",
  ],
};

export const yearsOfExperience = new Date().getFullYear() - site.foundingYear;

export const industries = [
  {
    title: "Pertambangan",
    desc: "Komponen kelistrikan untuk dump truck, haul truck, dan alat berat di area tambang.",
    image: "haul-truck",
  },
  {
    title: "Kehutanan",
    desc: "Suku cadang andal untuk truk logging dan unit operasional di medan berat.",
    image: "forestry",
  },
  {
    title: "Minyak & Gas",
    desc: "Perangkat keselamatan dan kelistrikan untuk kebutuhan industri Oil & Gas.",
    image: "oil-gas",
  },
] as const;

export const advantages = [
  {
    icon: "tag",
    title: "Kualitas & Harga Terbaik",
    desc: "Produk berkualitas dengan harga yang kompetitif untuk kebutuhan operasional Anda.",
  },
  {
    icon: "shield",
    title: "Quality Control Ketat",
    desc: "Setiap produk diperiksa dan diuji untuk menjamin keunggulan dan keandalannya.",
  },
  {
    icon: "boxes",
    title: "Stok Lengkap 2.000+ Item",
    desc: "Kabel, terminal, konektor, alat crimp, sakelar, kotak sekering, pipa rem, aksesori, dan lainnya.",
  },
] as const;

export const categories = [
  "Engine Safety Device & Protection System",
  "Electrical Parts",
  "LED Truck & Trailer Lighting",
  "Work Lamp & Flood Light",
  "Warning Light & Backup Alarms",
  "Bulbs & Globes",
  "Cables & Cable Accessories",
  "Crimp Terminals & Connectors",
  "Fuse, Circuit Breakers, Relays & Flasher",
  "Switches & Solenoids",
  "Power Products",
  "Instrument Timers Tools & Equipment",
];

export const featuredProducts = [
  {
    name: "Speed Limiter System",
    desc: "Membatasi dan mengurangi kecepatan kendaraan sesuai dengan batas yang diizinkan.",
    image: "truck-light",
  },
  {
    name: "Loto Box Safety Device (Heavy Duty)",
    desc: "Sistem tanda peringatan dan keselamatan yang dipasang pada unit saat melakukan perbaikan.",
    image: "control-panel",
  },
  {
    name: "Bracket APAR",
    desc: "Bracket alat pemadam api ringan, tersedia untuk ukuran 3, 6, 9, 12, dan 50 kg.",
    image: "fire-extinguisher",
  },
  {
    name: "SPMC",
    desc: "Dilengkapi koneksi WiFi dan pengaturan yang user friendly.",
    image: "wires",
  },
] as const;

export const distributors = [
  {
    name: "PT. Garuda Mart Indonesia",
    address: "Sakura Regency J5-8A, Jati Asih, Bekasi 17423",
    phone: "(021) 8240 7309",
    phoneHref: "+622182407309",
    web: "https://www.garudamart.com",
  },
  {
    name: "PT. Global Inti Sejati",
    address: "Jl. Wibawa Mukti II No. 88 RT.03/01, Jati Asih, Bekasi 17425",
    phone: "(021) 8274 1900",
    phoneHref: "+622182741900",
    web: "https://www.globalinti.com",
  },
];

export const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#produk", label: "Produk" },
  { href: "#unggulan", label: "Unggulan" },
  { href: "#distributor", label: "Distributor" },
  { href: "#kontak", label: "Kontak" },
];
