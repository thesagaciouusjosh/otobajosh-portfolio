import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "O'toba Josh Digitals transformed how we communicate. Their ability to distill complex ideas into clear, powerful messages is unmatched.",
            author: "Sarah Jenkins",
            role: "CMO, TechFlow"
        },
        {
            quote: "Professional, strategic, and incredibly talented. The content strategy they developed became the backbone of our marketing efforts.",
            author: "Michael Ross",
            role: "Founder, Ross & Co."
        },
        {
            quote: "We needed a voice that commanded authority without sounding arrogant. They nailed it perfectly. Highly recommended.",
            author: "Elena Rodriguez",
            role: "Director of Ops, Skyline"
        },
        {
            quote: "The quality of writing is exceptional. It's rare to find an agency that understands both the art of writing and the science of strategy.",
            author: "David Chen",
            role: "VP Marketing, Innovate"
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h1 className="mb-lg text-center">Client Words</h1>
                <div className="grid grid-2" style={{ gap: '4rem' }}>
                    {testimonials.map((item, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <p style={{
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-serif)',
                                fontStyle: 'italic',
                                marginBottom: '2rem',
                                lineHeight: '1.4'
                            }}>
                                "{item.quote}"
                            </p>
                            <div>
                                <div style={{ fontWeight: 600 }}>{item.author}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
