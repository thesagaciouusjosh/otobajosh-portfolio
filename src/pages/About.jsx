import React from 'react';

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="mb-md">About O'toba Josh Digitals</h1>
                    <p className="mb-md" style={{ fontSize: '1.125rem' }}>
                        We are a writing and content strategy agency defined by clarity, brevity, and precision.
                        In a digital landscape cluttered with noise, we provide the signal.
                    </p>

                    <div style={{ margin: '4rem 0', height: '1px', backgroundColor: 'var(--color-border)' }}></div>

                    <h2 className="mb-sm">Our Philosophy</h2>
                    <p className="mb-md">
                        We believe that great content is not just about words—it's about structure, strategy, and intent.
                        Every sentence should serve a purpose. Every piece of content should move the needle.
                    </p>
                    <p className="mb-lg">
                        Our approach is rooted in a deep understanding of your audience and your business goals.
                        We strip away the unnecessary to reveal the essential, crafting messages that are both powerful and persuasive.
                    </p>

                    <h2 className="mb-sm">Our Approach</h2>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem' }}>Strategic Insight</h3>
                            <p>We start with the 'why' before the 'what'. Understanding your strategic objectives is our first step.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem' }}>Craftsmanship</h3>
                            <p>We obsess over details. Tone, voice, and rhythm are carefully calibrated for maximum impact.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem' }}>Clarity</h3>
                            <p>Complex ideas made simple. We translate industry jargon into clear, compelling narratives.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem' }}>Reliability</h3>
                            <p>We deliver on time, every time. Professionalism is the cornerstone of our agency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
