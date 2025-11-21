import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-alt)', padding: '4rem 0', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="grid grid-3" style={{ gap: '4rem' }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>O'toba Josh Digitals</h3>
                        <p>Clarity. Brevity. Precision. Authority.</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Menu</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Contact</h4>
                        <p>hello@otobajoshdigitals.com</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                    &copy; {new Date().getFullYear()} O'toba Josh Digitals. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
