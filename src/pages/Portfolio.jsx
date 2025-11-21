import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            category: "Website Copy",
            title: "FinTech Solutions",
            description: "Complete website overhaul for a leading financial technology firm, focusing on trust and innovation."
        },
        {
            category: "Content Strategy",
            title: "Health & Wellness Brand",
            description: "Developed a comprehensive content roadmap and messaging framework to increase organic traffic by 40%."
        },
        {
            category: "Articles & Insights",
            title: "SaaS Industry Report",
            description: "Ghostwrote a series of thought leadership articles for a SaaS CEO, published in major industry outlets."
        },
        {
            category: "Brand Voice",
            title: "Luxury Real Estate",
            description: "Defined and documented a sophisticated brand voice for a high-end real estate agency."
        },
        {
            category: "Digital Assets",
            title: "Marketing Ebook",
            description: "Wrote and structured a 50-page lead magnet ebook that generated over 1,000 qualified leads."
        },
        {
            category: "Business Writing",
            title: "Corporate Annual Report",
            description: "Crafted the narrative and executive summary for a Fortune 500 company's annual report."
        }
    ];

    return (
        <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-xl"
                >
                    <h1 className="mb-md">Selected Work</h1>
                    <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-border)' }}></div>
                </motion.div>

                <div className="grid grid-2" style={{ rowGap: 'var(--spacing-lg)', columnGap: 'var(--spacing-md)' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="card-hover"
                            style={{
                                padding: '3rem',
                                backgroundColor: 'var(--color-bg-alt)',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '400px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    color: 'var(--color-text-light)',
                                    marginBottom: '1.5rem',
                                    fontWeight: 500
                                }}>
                                    {project.category}
                                </div>
                                <h3 className="mb-md" style={{ fontSize: '2rem' }}>{project.title}</h3>
                                <p style={{ fontSize: '1.125rem', maxWidth: '90%' }}>{project.description}</p>
                            </div>

                            <div style={{
                                marginTop: '2rem',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--color-text)',
                                    color: 'var(--color-text)'
                                }}>
                                    <ArrowUpRight size={24} strokeWidth={1} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
