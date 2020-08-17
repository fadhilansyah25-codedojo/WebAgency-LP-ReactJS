import React from 'react';
import Fade from 'react-reveal/Fade';

import Section from 'elements/Section';
import Card from 'elements/Card';
import Lists from 'elements/Lists';
import Clients from 'parts/Clients';
import Feature from 'parts/Feature';
import Header from 'parts/Header';

import HeroImage from 'assets/images/hero-image.png';
import FeatureTittleIcon01 from 'assets/images/feature-tile-icon-01.svg';
import FeatureTittleIcon02 from 'assets/images/feature-tile-icon-02.svg';
import FeatureTittleIcon03 from 'assets/images/feature-tile-icon-03.svg';


export default function Homepage() {
    const features = [
        {
            imgSrc: FeatureTittleIcon01,
            imgAlt: "Feature tile icon 01",
            tittle: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTittleIcon02,
            imgAlt: "Feature tile icon 02",
            tittle: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: FeatureTittleIcon03,
            imgAlt: "Feature tile icon 03",
            tittle: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        }
    ];

    const listPricing = [
        {
            Price : 27,
            currencySymbbol : "$",
            description : "Lorem ipsum is a common text",
            features : [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
            ]
        },
        {
            Price : 47,
            currencySymbbol : "$",
            description : "Lorem ipsum is a common text",
            features : [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
            ]
        },
        {
            Price : 67,
            currencySymbbol : "$",
            description : "Lorem ipsum is a common text",
            features : [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
            ]
        }
    ]
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01" isCenteredContent>
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                            <div className="hero-content">
                                <Fade distance="50px" bottom delay={200}>
                                    <h1
                                        className="mt-0 mb-16"
                                    >
                                        Landing template for startups
                            </h1>
                                </Fade>
                                <Fade distance="50px" bottom delay={400}>
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
                            <Fade bottom distance="50px" delay={800}>
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
                <Section className="features-tiles">
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {features.map((feature, index) =>
                                    <Feature key={index} delayInMS={index * 200} data={feature}></Feature>
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="pricing">
                    <div class="container">
                        <div className="pricing-inner section-inner has-top-divider">
                            <div className="section-header center-content">
                                <div className="container-xs">
                                    <h2 className="mt-0 mb-16">
                                        Simple, transarent pricing
                                </h2>
                                    <p className="m-0">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                </p>
                                </div>
                            </div>
                            <div className="tiles-wrap">
                                {
                                    listPricing.map((list, index) => {
                                        return (
                                            <Card hasShadow className=""></Card>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    )
}
