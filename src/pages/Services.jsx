import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Writing Services",
            description: "Compelling copy that converts and engages.",
            items: ["Website Copy", "Brand Messaging", "Sales Pages", "Articles & Blog Posts", "Thought Leadership", "Newsletters"]
        },
        {
            title: "Content Strategy",
            description: "Blueprints for sustainable growth and authority.",
            items: ["Content Roadmaps", "Messaging Frameworks", "Content Funnels", "Content Audits", "Brand Voice Development"]
        },
        {
            title: "Digital Assets",
            description: "High-value resources that build trust and leads.",
            items: ["Ebooks & Whitepapers", "Comprehensive Guides", "Course Scripts", "Digital Product Writing", "Case Studies"]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h1 className="mb-lg text-center">Our Services</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            padding: '2rem',
                            border: '1px solid var(--color-border)',
                            backgroundColor: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-alt)'
                        }}>
                            <div>
                                <h2 className="mb-sm" style={{ fontSize: '2rem' }}>{service.title}</h2>
                                <p style={{ fontSize: '1.125rem' }}>{service.description}</p>
                            </div>
                            <div>
                                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {service.items.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
