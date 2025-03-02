import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/App.css';
import domly from '../assets/images/Domly.JPG';
import croatia from '../assets/images/Croatia.jpeg';
import whipp from '../assets/images/whipp.jpeg';
import paris from '../assets/images/IMG_8687.jpeg'
import soccer from '../assets/images/IMG_8147.jpeg'
import ceramic from '../assets/images/headshot_2025.jpeg'

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
        // if (!ref.current) return 0;
        // const imgMidPoint = ref.current.offsetTop + (ref.current.height / 2);
        // const viewportMidPoint = scrollY + (window.innerHeight / 2);
        // const distance = Math.abs(imgMidPoint - viewportMidPoint);
        // const maxDistance = window.innerHeight / 2 + ref.current.height / 2;
        // return 1 - Math.min(distance / maxDistance, 1);
        return 1
    };

    return (
        <div className="about-section">
        <h2 className="section-header">About Me</h2>
        <div className="about-images">
            <div className="about-image-wrapper">
                <img ref={imageRef1} style={{opacity: calculateOpacity(imageRef1)}} src={paris} alt="Eiffel Tower in Paris" className="about-image" />
                <p className="image-caption">Paris Olympics 2024</p>
            </div>
            <div className="about-image-wrapper">
                <img ref={imageRef2} style={{opacity: calculateOpacity(imageRef2)}} src={ceramic} alt="Croatia coastline" className="about-image" />
                <p className="image-caption"> </p>
            </div>
            <div className="about-image-wrapper">
                <img ref={imageRef3} style={{opacity: calculateOpacity(imageRef3)}} src={soccer} alt="Playing soccer" className="about-image" />
                <p className="image-caption">Women's Olympic Soccer Final 2024</p>
            </div>
        </div>



    
            <div  className= "about-paragraph">
                <p>
                Hello, <br /><br />
                I'm Townsend Saunders III, a Data Scientist and entrepreneur. I have 5 years experience as a Data Scientist, have worked for a Fortune 250 company and possess a degree in Engineering Mathematics and Statistics from UC Berkeley.  
                I also worked on AI Engineering research for the Department of Tresaury.  I am co-Founder and CTO of Tree Ring Design.
                <br /><br />
                In my free time you can find me outdoors with my 2 dogs, playing soccer, or practicing ceramics.
                
                <br /><br />
                For work opportunities please email me at townsend.saunders3@gmail.com and consider consulting my Chatbot below for any questions you might have.
                 </p>
            </div>
        </div>
    );
}

export default AboutMe;
