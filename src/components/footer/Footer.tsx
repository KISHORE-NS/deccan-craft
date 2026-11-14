
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faInstagram,
    faXTwitter,
    faYoutube,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import './Footer.css'

function Footer() {

    return (
        <div className="light-bg p-3">
            <footer className="site-footer">
                <div className="container-fluid footer-container">

                    {/* Top CTA section */}
                    <div className="footer-top">
                        <div className="row align-items-center gy-4">

                            <div className="col-lg-7">
                                <h2 className="footer-heading">
                                    Let's Create Something Timeless
                                </h2>
                            </div>

                            <div className="col-lg-5">
                                <p className="footer-intro">
                                    We're here to listen, explore ideas, and bring your
                                    vision to life at your pace.
                                </p>

                                <div className="footer-actions">

                                    <a href="/contact" className="footer-btn">
                                        <FontAwesomeIcon icon={faPhone} />
                                        Call Now
                                    </a>

                                    <a
                                        href="/contact"
                                        className="footer-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                        WhatsApp Us
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Main footer content */}
                    <div className="footer-main">
                        <div className="row gy-4">

                            {/* Brand information */}
                            <div className="col-12 col-md-6 col-lg-4">

                                <div className="footer-logo fs-2">
                                    <span>Deccan Craft</span>
                                </div>

                                <p className="footer-description">
                                    We are dedicated to transforming spaces into timeless
                                    expressions of comfort, craftsmanship, and thoughtful
                                    design.
                                </p>

                                <div className="footer-socials">

                                    <a href="https://facebook.com" aria-label="Facebook">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>

                                    <a href="https://instagram.com" aria-label="Instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>

                                    <a href="https://x.com" aria-label="X">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </a>

                                    <a href="https://youtube.com" aria-label="YouTube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>

                                    <a href="https://linkedin.com" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>

                                </div>
                            </div>

                            {/* Our Collection */}
                            <div className="col-6 col-md-3 col-lg-2">

                                <h3 className="footer-title fs-5">
                                    Our Collection
                                </h3>

                                <ul className="footer-links ">
                                    <li>Living Room</li>
                                    <li>Dining Furniture</li>
                                    <li>Bedroom Sets</li>
                                    <li>Office Furniture</li>
                                    <li>Home Decor</li>
                                </ul>

                            </div>

                            {/* Our Services */}
                            <div className="col-6 col-md-3 col-lg-2">

                                <h3 className="footer-title fs-5">
                                    Our Services
                                </h3>

                                <ul className="footer-links">
                                    <li>Custom Furniture</li>
                                    <li>Interior Design</li>
                                    <li>Consultation</li>
                                    <li>Delivery & Setup</li>
                                    <li>Furniture Care</li>
                                </ul>

                            </div>

                            {/* Help and contact */}
                            <div className="col-12 col-md-6 col-lg-4">

                                <h3 className="footer-title">
                                    Need Assistance?
                                </h3>

                                <p className="footer-contact-text">
                                    Have a question? Our team is happy to help.
                                </p>

                                <a href="/contact" className="footer-contact">
                                    <FontAwesomeIcon icon={faPhone} />
                                    +91 99885 56644
                                </a>

                                <a
                                    href="/contact"
                                    className="footer-contact"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    support@DeccanCraft.com
                                </a>

                                <a href="/contact" className="footer-contact">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    Contact Our Team
                                </a>

                            </div>

                        </div>
                    </div>

                    {/* Copyright bar */}
                    <div className="footer-bottom">

                        <p>
                            © {new Date().getFullYear()} Deccan Craft. All rights reserved.
                        </p>

                        <div className="footer-legal">
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/terms">Terms & Conditions</a>
                        </div>

                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;
