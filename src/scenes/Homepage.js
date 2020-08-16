import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import Section from 'elements/Section';
import HeroImage from 'assets/images/hero-image.png';
import Clients from 'parts/Clients';


export default function Homepage() {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01" isCenteredContent>
                <div className="container-sm">
                    <div className="hero-inner section-inner">
                        <div className="hero-content">
                            <Fade distance="10px" bottom delay={200}>
                            <h1
                                className="mt-0 mb-16"
                            >
                                Landing template for startups
                            </h1>
                            </Fade>
                            <Fade distance="10px" bottom delay={400}>
                            <div className="container-xs">
                                <p
                                    className="mt-0 mb-32"
                                >
                                    Our landing page template works on all
                                    devices, so you only have to set it up
                                    once, and get beautiful results forever.
                                </p>
                            </div>
                            </Fade>
                        </div>
                        <Fade bottom distance="10px" delay={800}>
                        <div
                            className="hero-figure illustration-element-01"
                        >
                            <img
                                className="has-shadow"
                                src={HeroImage}
                                alt="Hero"
                                width="896"
                                height="504"
                            />
                        </div>
                        </Fade>
                    </div>
                </div>
                </Section>
                <Clients></Clients>
            </main>
        </div>
        
    )
}
