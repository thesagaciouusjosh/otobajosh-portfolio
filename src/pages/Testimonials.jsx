import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "O'toba Josh Digitals transformed our brand voice. The copy is not just beautiful; it converts. We saw a 40% increase in leads within the first month.",
            author: "Sarah Jenkins",
            role: "CMO, FinTech Solutions"
        },
        {
            quote: "Professional, strategic, and incredibly talented. They understood our complex industry and simplified it for our audience without losing the nuance.",
            author: "Michael Chen",
            role: "Founder, HealthTech Inc."
        },
        {
            quote: "The best investment we made for our website launch. The content strategy was spot on, and the execution was flawless.",
            author: "Elena Rodriguez",
            role: "Director of Marketing, Luxe Real Estate"
        },
        {
            quote: "Finally, an agency that gets it. No fluff, just powerful words that resonate with our customers. Highly recommended.",
            author: "David Smith",
            role: "CEO, SaaS Growth"
        }
    ];

    return (
        <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-xl"
                >
                    <h1 className="mb-md">Trusted by <span style={{ color: 'var(--color-accent)' }}>Industry Leaders</span>.</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                        Don't just take our word for it. Here's what our partners have to say about working with us.
                    </p>
                </motion.div>

                <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '3rem',
                                backgroundColor: 'var(--color-bg-alt)',
                                borderRadius: '8px',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                left: '2rem',
                                color: 'var(--color-accent)',
                                opacity: 0.2
                            }}>
                                <Quote size={64} />
                            </div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <p className="mb-md" style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{testimonial.author}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 0 }}>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
