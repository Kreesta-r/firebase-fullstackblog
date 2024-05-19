import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-title">About Us</h2>
                    <p className="footer-text">
                        Welcome to our blog! We share the latest news, articles, and insights on various topics. Stay tuned for updates.
                    </p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Follow Us</h2>
                    <div className="footer-social">
                        <a href="https://facebook.com" className="social-link"><img src="/facebook-icon.png" alt="Facebook" /></a>
                        <a href="https://twitter.com" className="social-link"><img src="/twitter-icon.png" alt="Twitter" /></a>
                        <a href="https://instagram.com" className="social-link"><img src="/instagram-icon.png" alt="Instagram" /></a>
                        <a href="https://linkedin.com" className="social-link"><img src="/linkedin-icon.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Blog Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
