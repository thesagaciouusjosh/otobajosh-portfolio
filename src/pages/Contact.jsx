import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

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
        <section className="section">
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 className="mb-md text-center">Start a Project</h1>
                    <p className="mb-lg text-center" style={{ fontSize: '1.125rem' }}>
                        Ready to elevate your brand's voice? Tell us about your project, and we'll be in touch shortly.
                    </p>

                    {statusMessage && (
                        <div style={{
                            padding: '1rem',
                            marginBottom: '1.5rem',
                            borderRadius: '4px',
                            backgroundColor: statusMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: statusMessage.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${statusMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                        }}>
                            {statusMessage.text}
                        </div>
                    )}

                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="user_name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                            <input type="text" name="user_name" id="user_name" required style={{
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--color-border)',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1rem'
                            }} placeholder="Your Name" />
                        </div>

                        <div>
                            <label htmlFor="user_email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                            <input type="email" name="user_email" id="user_email" required style={{
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--color-border)',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1rem'
                            }} placeholder="name@company.com" />
                        </div>

                        <div>
                            <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Budget Range</label>
                            <select name="budget" id="budget" style={{
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--color-border)',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1rem',
                                backgroundColor: 'white'
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
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }} placeholder="Tell us about your goals..."></textarea>
                        </div>

                        <button type="submit" className="btn" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
