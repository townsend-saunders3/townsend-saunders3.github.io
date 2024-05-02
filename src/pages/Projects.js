import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/App.css';
const Projects = () => {
    const [scrollY, setScrollY] = useState(0);
    const [displayedCharacters, setDisplayedCharacters] = useState(0);
    const sectionRef = useRef(null);

    const paragraph = "Projects projects projects…  My resume has the descriptions of everything thing you need to know about my professional experience.  So, instead of rehashing, let’s look at some personal endeavors!  Below you will find several streamlit apps I have created over the past year.  Some are more finished than others.  They range from helping women’s wrestlers on TeamUSA, to micronutrient reports on diet, resume helpers, and even budget planners for credit card users.  Each of these have been spur of the moment passion projects.  All are hosted on Streamlit’s community cloud which is free! Hooray! That also means that lack of activity can cause the app to go dormant… So, if this part of the website is down, I apologize, but send me a message and I'll spin it back up!  Feel free to contact me about any of these projects personally if you are interested.  The code is all available on Github!"
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        const sectionTop = sectionRef.current.offsetTop;
        const totalHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Adjusting the calculation to fit the desired effect
        const distanceFromTop = scrollY + windowHeight - sectionTop;
        const totalScrollableHeight = windowHeight + totalHeight;

        const percentageScrolled = Math.min(1, distanceFromTop / totalScrollableHeight*5);
        const newDisplayedCharacters = Math.round(paragraph.length * percentageScrolled);

        setDisplayedCharacters(newDisplayedCharacters);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <div className="projects-section" ref={sectionRef}>
            <h2 className = "section-header">Projects</h2>
            
            <div className="projects-paragraph-section">
                <p className="projects-description">
                    {paragraph.slice(0, displayedCharacters)}
                </p>
            </div>
            {/* <div className="project-sub-split"></div> */}
            <div className="projects-sub-section">
            {/* <hr></hr> */}
            <h2 className = "project-header">Wrestling</h2>
            <iframe src="https://wrestling.streamlit.app/?embed=true" title = 'Wrestling' width="100%" height="600" frameborder="0"></iframe>
            {/* <hr></hr> */}
            <h2 className = "project-header">Budget Helper</h2>
            <iframe src="https://ts3-live-budget.streamlit.app/?embed=true" title = 'Budget Helper' width="100%" height="600" frameborder="0"></iframe>
            {/* <hr></hr> */}
            <h2 className = "project-header">Resume Improver</h2>
            <iframe src="https://job-ap.streamlit.app/?embed=true" title = 'Resume Improver' width="100%" height="600" frameborder="0"></iframe>
            <h2 className = "project-header">Health</h2>
            <iframe src="https://health-nutrient.streamlit.app/?embed=true" title = 'Health' width="100%" height="600" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Projects;
