import React from 'react';

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
        <section className="section">
            <div className="container">
                <h1 className="mb-lg text-center">Selected Work</h1>
                <div className="grid grid-2">
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-light)',
                                marginBottom: '1rem'
                            }}>
                                {project.category}
                            </div>
                            <h3 className="mb-sm">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
