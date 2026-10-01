"use client";

import type { FormEvent } from "react";
import { site } from "@/lib/site";

// Tanpa backend: form membuka aplikasi email pengguna dengan pesan yang sudah terisi.
export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const subject = `Permintaan Penawaran — ${get("company") || get("name")}`;
    const body = [
      `Nama: ${get("name")}`,
      `Perusahaan: ${get("company") || "-"}`,
      `Telepon: ${get("phone") || "-"}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nama lengkap
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Perusahaan
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </div>
      <label>
        No. telepon / WhatsApp
        <input type="tel" name="phone" autoComplete="tel" />
      </label>
      <label>
        Kebutuhan / daftar part
        <textarea
          name="message"
          required
          placeholder="Contoh: Speed Limiter System 5 unit, Bracket APAR 6 kg 10 pcs"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Kirim via Email
      </button>
    </form>
  );
}
