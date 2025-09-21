import "./Footer.css";
import logo from "./assets/images/logo.png"; // replace with your actual logo file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Little Lemon Logo" />
          <p>Little Lemon — Chicago</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Main Street<br />Chicago, IL</p>
          <p>(312) 555-1234</p>
          <p>info@littlelemon.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
