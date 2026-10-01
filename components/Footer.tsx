export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#" className="logo">
          PT XYZ<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} PT XYZ. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
