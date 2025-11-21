import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, letterSpacing: '-0.03em' }}>
                    O'toba Josh Digitals
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-light)',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                            onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-light)'}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)';
                            e.currentTarget.style.transform = 'rotate(15deg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.transform = 'rotate(0deg)';
                        }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-text)'
                        }}
                    >
                        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: '0',
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'var(--color-bg)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                        gap: '2rem'
                    }}>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '2rem',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-text)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
