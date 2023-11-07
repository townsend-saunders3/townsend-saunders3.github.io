import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/App.css';
import domly from '../assets/images/Domly.JPG';
import croatia from '../assets/images/Croatia.jpeg';
import whipp from '../assets/images/whipp.jpeg';

const AboutMe = () => {
    const [scrollY, setScrollY] = useState(0);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateOpacity = (ref) => {
        if (!ref.current) return 0;
        const imgMidPoint = ref.current.offsetTop + (ref.current.height / 2);
        const viewportMidPoint = scrollY + (window.innerHeight / 2);
        const distance = Math.abs(imgMidPoint - viewportMidPoint);
        const maxDistance = window.innerHeight / 2 + ref.current.height / 2;
        return 1 - Math.min(distance / maxDistance, 1);
    };

    return (
        <div className="about-section">
            <h2 className='section-header'>About Me</h2>
            <div className="about-images">
                <img ref={imageRef1} style={{opacity: calculateOpacity(imageRef1)}} src={domly} alt="Description 1" className="about-image"/>
                <img ref={imageRef2} style={{opacity: calculateOpacity(imageRef2)}} src={croatia} alt="Description 2" className="about-image"/>
                <img ref={imageRef3} style={{opacity: calculateOpacity(imageRef3)}} src={whipp} alt="Description 3" className="about-image"/>

            </div>
            <div  className= "about-paragraph">
                <p>
                Hello, <br /><br />
                I'm Townsend Saunders III, a data scientist passionate about leveraging technology to make impactful decisions and to solve real-world problems. 
                With a background in Engineering Mathematics and Statistics from UC Berkeley, I bring a strong analytical lens to my work, whether it's streamlining inventory management with machine learning or designing real-time anomaly detection systems. 
                I pride myself on bridging the gap between the technical and business aspects of a project, being the conduit that turns complex data into actionable insights.<br /><br />

                But who am I outside of the tech world? Well, I'm someone who finds joy in imparting knowledge, having been a math tutor for several years. 
                I'm an ardent soccer enthusiast, both as a player and as a manager, with future aspirations of coaching youth soccer.
                Outside of work, I delve into ceramics and dream of one day setting up a home studio. <br /><br />

                I'm currently living in Corvallis, Oregon, embarking on a new chapter of life with my significant other and our two adorable dogs, Ripley and Whipp. 
                Here, every day is a new adventure and the excitement of establishing ourselves in a new place keeps our spirits high.<br /><br />

                If you think I might be a good fit for your team or you're interested in collaborating, I'd love to hear from you!"
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
