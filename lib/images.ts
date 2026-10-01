// Semua foto berlisensi CC0 / Public Domain (via Openverse). Lihat public/images/CREDITS.md.
import heroMiningTrucks from "@/public/images/hero-mining-trucks.jpg";
import miningTruck from "@/public/images/mining-truck.jpg";
import haulTruck from "@/public/images/haul-truck.jpg";
import forestry from "@/public/images/forestry.jpg";
import oilGas from "@/public/images/oil-gas.webp";
import truckLight from "@/public/images/truck-light.webp";
import controlPanel from "@/public/images/control-panel.jpg";
import fireExtinguisher from "@/public/images/fire-extinguisher.webp";
import wires from "@/public/images/wires.webp";
import cableCoil from "@/public/images/cable-coil.jpg";

export const images = {
  "hero-mining-trucks": {
    src: heroMiningTrucks,
    alt: "Armada dump truck beroperasi di area tambang terbuka",
  },
  "mining-truck": {
    src: miningTruck,
    alt: "Truk tambang heavy duty dengan sistem kelistrikan lengkap",
  },
  "haul-truck": {
    src: haulTruck,
    alt: "Haul truck untuk industri pertambangan",
  },
  forestry: {
    src: forestry,
    alt: "Truk logging mengangkut kayu untuk industri kehutanan",
  },
  "oil-gas": {
    src: oilGas,
    alt: "Fasilitas kilang minyak dan gas pada malam hari",
  },
  "truck-light": {
    src: truckLight,
    alt: "Lampu depan truk sebagai ilustrasi produk Speed Limiter System",
  },
  "control-panel": {
    src: controlPanel,
    alt: "Panel kontrol kelistrikan unit tambang sebagai ilustrasi Loto Box Safety Device",
  },
  "fire-extinguisher": {
    src: fireExtinguisher,
    alt: "Alat pemadam api ringan (APAR) terpasang pada bracket dinding",
  },
  wires: {
    src: wires,
    alt: "Kabel kelistrikan berwarna sebagai ilustrasi produk SPMC",
  },
  "cable-coil": {
    src: cableCoil,
    alt: "Gulungan kabel kelistrikan otomotif",
  },
} as const;

export type ImageKey = keyof typeof images;
