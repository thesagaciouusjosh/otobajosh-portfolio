import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenTool, Zap, Shield } from 'lucide-react';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                    >
                        <motion.h1 variants={fadeIn} className="mb-md text-center">
                            The Agency for <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>Strategic Clarity.</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mb-xl text-center" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
                            We are a writing and content strategy agency defined by clarity, brevity, and precision.
                            In a digital landscape cluttered with noise, we provide the signal.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="mb-md">Our Philosophy</h2>
                            <p className="mb-md" style={{ fontSize: '1.125rem' }}>
                                We believe that great content is not just about words—it's about structure, strategy, and intent.
                                Every sentence should serve a purpose. Every piece of content should move the needle.
                            </p>
                            <p style={{ fontSize: '1.125rem' }}>
                                Our approach is rooted in a deep understanding of your audience and your business goals.
                                We strip away the unnecessary to reveal the essential, crafting messages that are both powerful and persuasive.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '4px' }}>
                                <Target size={32} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Strategic Insight</h3>
                            </div>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '4px', marginTop: '2rem' }}>
                                <PenTool size={32} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Craftsmanship</h3>
                            </div>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '4px' }}>
                                <Zap size={32} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Clarity</h3>
                            </div>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '2rem', borderRadius: '4px', marginTop: '2rem' }}>
                                <Shield size={32} style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem' }}>Reliability</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
