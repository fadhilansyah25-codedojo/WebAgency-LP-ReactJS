import React from 'react';
import Fade from 'react-reveal/Fade';

import Section from 'elements/Section';
import Clients01 from 'assets/images/clients-01.svg';
import Clients02 from 'assets/images/clients-02.svg';
import Clients03 from 'assets/images/clients-03.svg';
import Clients04 from 'assets/images/clients-04.svg';
import Clients05 from 'assets/images/clients-05.svg';
export default function Clients() {
    const images = [
        {
            "img" : Clients01,
            "alt" : "Clients 01"
        },
        {
            "img" : Clients02,
            "alt" : "Clients 02"
        },
        {
            "img" : Clients03,
            "alt" : "Clients 03"
        },
        {
            "img" : Clients04,
            "alt" : "Clients 04"
        },
        {
            "img" : Clients05,
            "alt" : "Clients 05"
        }
    ];
    const image = images.map((images) => 
        <li><img src={images.img} alt={images.alt}/></li>
    );
    return (
        <Section className="clients">
            <Fade bottom distance="10px">
            <div className="container">
                <div className="clients-inner section-inner has-top-divider has-bottom-divider">
                    <ul className="list-reset">
                        {image}
                    </ul>
                </div>
            </div>
            </Fade>
        </Section>
    )
}
