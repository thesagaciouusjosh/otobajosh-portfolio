import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Layout, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--spacing-xl)' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        style={{ maxWidth: '900px' }}
                    >
                        <motion.h1 variants={fadeIn} className="mb-md">
                            <span style={{ display: 'block', color: 'var(--color-text-light)', fontSize: '0.4em', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>
                                Premium Content Strategy
                            </span>
                            Strategic Writing & <br />
                            <span style={{ fontStyle: 'italic' }}>Digital Authority.</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mb-lg" style={{ fontSize: '1.25rem', maxWidth: '600px', lineHeight: '1.8' }}>
                            We craft clear, precise, and authoritative content for brands that demand excellence.
                            Reliability, craftsmanship, and strategic thinking in every word.
                        </motion.p>
                        <motion.div variants={fadeIn}>
                            <Link to="/contact" className="btn">
                                Start a Project
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Abstract Background Element */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-5%',
                    fontSize: '30rem',
                    fontFamily: 'var(--font-serif)',
                    opacity: 0.03,
                    pointerEvents: 'none',
                    lineHeight: 1,
                    zIndex: -1
                }}>
                    Aa
                </div>
            </section>

            {/* Services Preview */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-lg"
                    >
                        <h2 className="mb-sm">Our Expertise</h2>
                        <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-text)' }}></div>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            {
                                icon: <PenTool size={32} strokeWidth={1} />,
                                title: "Writing Services",
                                desc: "Website copy, brand messaging, and thought leadership articles that resonate with your audience.",
                                link: "/services"
                            },
                            {
                                icon: <Layout size={32} strokeWidth={1} />,
                                title: "Content Strategy",
                                desc: "Comprehensive roadmaps, messaging frameworks, and audits to drive sustainable growth.",
                                link: "/services"
                            },
                            {
                                icon: <BookOpen size={32} strokeWidth={1} />,
                                title: "Digital Assets",
                                desc: "High-value ebooks, guides, and course scripts designed to convert visitors into loyal customers.",
                                link: "/services"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="card-hover"
                                style={{
                                    padding: '3rem 2rem',
                                    backgroundColor: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '320px'
                                }}
                            >
                                <div>
                                    <div style={{ marginBottom: '2rem', color: 'var(--color-text)' }}>{service.icon}</div>
                                    <h3 className="mb-sm">{service.title}</h3>
                                    <p className="mb-md">{service.desc}</p>
                                </div>
                                <Link to={service.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Explore <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy / About Teaser */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="mb-md">Precision in every detail.</h2>
                            <p className="mb-md" style={{ fontSize: '1.125rem' }}>
                                In a digital world noisy with mediocrity, clarity is your competitive advantage. We don't just write words; we engineer communication that builds trust and drives action.
                            </p>
                            <Link to="/about" className="btn-outline" style={{
                                display: 'inline-block',
                                padding: '1rem 2rem',
                                border: '1px solid var(--color-text)',
                                textTransform: 'uppercase',
                                fontSize: '0.875rem',
                                letterSpacing: '0.05em',
                                fontWeight: 500
                            }}>
                                Read Our Story
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                height: '500px',
                                backgroundColor: '#f0f0f0',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Placeholder for an image - using a subtle gradient/pattern instead for now */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #f5f5f5 25%, #eaeaea 25%, #eaeaea 50%, #f5f5f5 50%, #f5f5f5 75%, #eaeaea 75%, #eaeaea 100%)',
                                backgroundSize: '40px 40px',
                                opacity: 0.5
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                fontSize: '5rem',
                                fontFamily: 'var(--font-serif)',
                                lineHeight: 1,
                                color: 'var(--color-text)',
                                opacity: 0.1
                            }}>
                                Est. 2024
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
