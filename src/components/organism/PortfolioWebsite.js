import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../molecules/Footer/Footer';
import Contact from '../molecules/Contact/Contact';
import MainSkillSecection from '../molecules/MainSkillsSection/MainSkillSection';
import PortfolioSection from '../molecules/PortfolioSection/PortfolioSection';
import {Hero} from '../molecules/Hero/Hero';


const PortfolioWebsite = () => {

    const wrapper = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll('section');


        sections.forEach(section => {
            gsap.fromTo(section.children, { y: '+=100', opacity: 0 }, {
                y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
                    trigger: section,
                    start: 'top 20%',
                }
            });
        });
    });

    return (
        <div ref={wrapper}>
            <Hero />
            <MainSkillSecection />
            <PortfolioSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default PortfolioWebsite;
