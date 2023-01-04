import { useState, useEffect, useRef } from "react"

// import stars from "../assets/img/skills-backgroundv4.webp"
import stars from "../assets/img/skills-backgroundv42.png"
// import stars from "../assets/img/skills-backgroundv3.png"
import javaScript from "../assets/img/skills-javascript.png"
import flask from '../assets/img/skills-flask.png'
import pythonImg from '../assets/img/skills-python.png'
import githubImg from '../assets/img/skills-github.png'
import vsCodeImg from '../assets/img/skills-vscode.png'
import postMan from '../assets/img/skills-postman.png'
import sqlImg from '../assets/img/skills-sql.png'
import reactImg from '../assets/img/skills-react.png'
import nodemonImg from "../assets/img/skills-nodemon.png"
import figmaImg from '../assets/img/skills-figma.png'
import gitImg from '../assets/img/skills-git.png'
import cssImg from '../assets/img/skils-css.png'
import htmlImg from '../assets/img/skills-html.png'
import ironHackImg from '../assets/img/skills-ironhack.png'
import codeWarsImg from '../assets/img/skills-codewars.png'
export const Skills = () => {
    const skillsIcons = [
        { url: javaScript },
        { url: flask },
        { url: pythonImg },
        { url: vsCodeImg },
        { url: postMan },
        { url: sqlImg },
        { url: reactImg },
        { url: nodemonImg },
        { url: figmaImg },
        { url: gitImg },
        { url: cssImg },
        { url: htmlImg },

    ];
    const [breaking, setBreaking] = useState('')


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 980) {
                setBreaking(<br />)

            } else {
                setBreaking('')
            }
        }
        window.addEventListener("resize", handleResize)
        // console.log('Starting Resize Listener')
        if (window.innerWidth < 980) {
            setBreaking(<br />)
        }
    }, [])
    // Create a ref to store a reference to the div element

    // Use the useEffect hook to set up the IntersectionObserver when the component mounts
    // Create a ref to store a reference to the div element
    const myDiv = useRef(null);
    // Create a new IntersectionObserver

    // Use the useEffect hook to start observing the div when the component mounts
    useEffect(() => {

        const currentDiv = myDiv.current

        const observer = new IntersectionObserver(entries => {
            // Loop through the entries
            entries.forEach(entry => {
                // Check if the entry is intersecting (i.e. visible in the viewport)
                if (entry.isIntersecting) {
                    // Check if the entry's intersection ratio (i.e. the percentage of the element that is visible in the viewport) is greater than or equal to 0.05 (5%)
                    if (entry.intersectionRatio >= 0.05) {
                        // Do something when the div comes into view
                        //   console.log('Div is in view');
                        // Add the right-top class to the div element
                        currentDiv.classList.add('spinning_into_view_animation');
                    }
                } else {
                    // Do something when the div moves out of view
                    // console.log('Div is out of view');
                    // Check if the entry's intersection ratio is 0 (i.e. the element is completely out of view)
                    if (entry.intersectionRatio === 0) {
                        // Remove the right-top class from the div element
                        currentDiv.classList.remove('spinning_into_view_animation');
                    }
                }
            });
        }, { threshold: 0.02 }); // Set the threshold to 0.05 (5% of the element's area must be visible in the viewport)
        // Start observing the div
        observer.observe(currentDiv);
        // Return a cleanup function to remove the right-top class and disconnect the observer when the component unmounts
        return () => {
            currentDiv.classList.remove('right-top');
            observer.disconnect();
        };
    }, []); // The empty array ensures that the effect is only run once, when the component mounts

    return (
        <section
            style={{ backgroundImage: `url(${stars})` }}
            id="skills">
            <div className="dimmer-skills">
                <div className="skills-left-top">
                </div>
                <div className="skills-left-middle">
                    <h1>Languages, tools and libraries </h1>
                </div>
                <div className="skills-left-bottom">
                    <div className="skills-spinning">
                        <div ref={myDiv} className="skills-spinning-wheel">
                            <div className="skills-spinning-wheel-inner">
                                {
                                    skillsIcons.map((x, index) => {
                                        return <div key={index} className="skills-spinning-inner-inner">
                                            <img key={index} src={x.url} alt="img"></img>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="skills-paragraph-main">
                        <div className="skills-paragraph-inner">
                            <h4>Languages</h4>
                            <p>HTML5, CSS, Javascript, JSX, Python, MongoDB, SQL </p>
                        </div>
                        <div className="skills-paragraph-inner">
                            <h4>Libraries/{breaking}Frameworks</h4>
                            <p>Node, Express, React, Flask, JQuery </p>
                        </div>
                        <div className="skills-paragraph-inner">
                            <h4>Tools/Misc</h4>
                            <p>VsCode, Postman, Figma, Git, GitHub, Postgres, Npm </p>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <div className="skills-resume">
                        <button>
                            <a href="https://www.credential.net/f9640acf-dbf8-4d2b-8441-8a026569cbbf">
                                <img className="not-all-clicked ironHack" src={ironHackImg} alt="IronHack Logo"></img>
                            </a>
                            <a href="https://www.codewars.com/users/Outlain">
                                <img className="not-all-clicked ironHack" src={codeWarsImg} alt="Codewars Logo"></img>
                            </a>
                            <a href="https://github.com/Outlain">
                                <img className="not-all-clicked ironHack" src={githubImg} alt="GitHub Logo"></img>
                            </a>
                        </button>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Skills;