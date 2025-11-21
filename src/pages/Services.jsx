import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, BookOpen, Search, BarChart, MessageSquare } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <PenTool size={40} />,
            title: "Website Copywriting",
            description: "Turn visitors into customers with persuasive, SEO-optimized copy that captures your brand's voice and drives conversions."
        },
        {
            icon: <Layout size={40} />,
            title: "Content Strategy",
            description: "We build comprehensive content roadmaps that align with your business goals, ensuring every piece of content serves a purpose."
        },
        {
            icon: <BookOpen size={40} />,
            title: "Ebooks & Whitepapers",
            description: "Establish authority and generate leads with high-value, in-depth resources that solve your audience's most pressing problems."
        },
        {
            icon: <Search size={40} />,
            title: "SEO Blogging",
            description: "Consistent, high-quality articles that rank on Google and position your brand as a thought leader in your industry."
        },
        {
            icon: <BarChart size={40} />,
            title: "Case Studies",
            description: "Showcase your success stories with data-driven narratives that prove your value to potential clients."
        },
        {
            icon: <MessageSquare size={40} />,
            title: "Email Marketing",
            description: "Nurture your audience with engaging email sequences that build relationships and drive repeat business."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-xl"
                    style={{ maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}
                >
                    <h1 className="mb-md">Services Designed for <span style={{ color: 'var(--color-accent)' }}>Growth</span>.</h1>
                    <p style={{ fontSize: '1.25rem' }}>
                        We don't just write words. We build assets that work for your business 24/7.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-3"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0, 86, 179, 0.1)",
                                borderColor: "var(--color-accent)"
                            }}
                            style={{
                                padding: '3rem 2rem',
                                backgroundColor: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                            }}
                        >
                            <div style={{
                                color: 'var(--color-accent)',
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                background: 'var(--color-bg-alt)',
                                display: 'inline-block',
                                borderRadius: '50%'
                            }}>
                                {service.icon}
                            </div>
                            <h3 className="mb-sm">{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
