export default function Footer(){
  let now = new Date();
  return <footer className="footer">
      <p className="footer-text">Copyright {now.getFullYear()} Argent Bank</p>
    </footer>
}