export default function Footer(){
    let now = new Date();
    return <footer class="footer">
    <p class="footer-text">Copyright {now.getFullYear()} Argent Bank</p>
  </footer>
}