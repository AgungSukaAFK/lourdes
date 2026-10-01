"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: kirim data ke backend / layanan email
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nama lengkap" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="company" placeholder="Nama perusahaan" />
      <textarea name="message" placeholder="Pesan Anda" required />
      <button type="submit" className="btn">
        Kirim Pesan
      </button>
      {sent && (
        <p className="form-success">Terima kasih! Pesan Anda telah terkirim.</p>
      )}
    </form>
  );
}
