import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <>
            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <h1 className="mb-md">
                            Strategic Writing & <br />
                            Digital Content Authority.
                        </h1>
                        <p className="mb-lg" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
                            We craft clear, precise, and authoritative content for brands that demand excellence.
                            Reliability, craftsmanship, and strategic thinking in every word.
                        </p>
                        <Link to="/contact" className="btn">
                            Start a Project
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <div className="grid grid-3">
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                            <h3 className="mb-sm">Writing Services</h3>
                            <p className="mb-md">Website copy, brand messaging, and thought leadership articles that resonate.</p>
                            <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                Explore <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                            <h3 className="mb-sm">Content Strategy</h3>
                            <p className="mb-md">Comprehensive roadmaps, messaging frameworks, and audits for growth.</p>
                            <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                Explore <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                            <h3 className="mb-sm">Digital Assets</h3>
                            <p className="mb-md">High-value ebooks, guides, and course scripts designed to convert.</p>
                            <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                Explore <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
