export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © 2025 Manual de WordPress · Inma Contreras · Uso educativo
        </p>
      </div>
    </footer>
  );
}
