import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        // Using environment variables for security
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatusMessage({ type: 'success', text: 'Message sent successfully! We\'ll be in touch soon.' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mb-md">Let's Start a <span style={{ color: 'var(--color-accent)' }}>Conversation</span>.</h1>
                        <p className="mb-lg" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
                            Ready to elevate your brand's voice? Tell us about your project, and we'll help you find the right words to say it.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-bg-alt)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-accent)'
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Email Us</h3>
                                    <p style={{ marginBottom: 0 }}>hello@otobajosh.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-bg-alt)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-accent)'
                                }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Call Us</h3>
                                    <p style={{ marginBottom: 0 }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            backgroundColor: 'var(--color-bg)',
                            padding: '3rem',
                            borderRadius: '12px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        {statusMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '1rem',
                                    marginBottom: '1.5rem',
                                    borderRadius: '4px',
                                    backgroundColor: statusMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                                    color: statusMessage.type === 'success' ? '#155724' : '#721c24',
                                    border: `1px solid ${statusMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                }}
                            >
                                {statusMessage.text}
                            </motion.div>
                        )}

                        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="user_name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                <input type="text" name="user_name" id="user_name" required style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--color-bg-alt)'
                                }} placeholder="Your Name" />
                            </div>

                            <div>
                                <label htmlFor="user_email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                                <input type="email" name="user_email" id="user_email" required style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--color-bg-alt)'
                                }} placeholder="name@company.com" />
                            </div>

                            <div>
                                <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Budget Range</label>
                                <select name="budget" id="budget" style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--color-bg-alt)'
                                }}>
                                    <option value="">Select a range</option>
                                    <option value="small">$1,000 - $5,000</option>
                                    <option value="medium">$5,000 - $10,000</option>
                                    <option value="large">$10,000+</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Project Details</label>
                                <textarea name="message" id="message" rows="5" required style={{
                                    width: '100%',
                                    padding: '1rem',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '4px',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '1rem',
                                    resize: 'vertical',
                                    backgroundColor: 'var(--color-bg-alt)'
                                }} placeholder="Tell us about your goals..."></textarea>
                            </div>

                            <button type="submit" className="btn" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? 'Sending...' : (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Send Message <Send size={18} />
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
