import stars from "../assets/img/stars.gif"
import javaScript from "../assets/img/skills-javascript.png"
import flask from '../assets/img/skills-flask.png'
import pythonImg from '../assets/img/skills-python.png'
import githubImg from '../assets/img/skills-github.png'
import vsCodeImg from '../assets/img/skills-vscode.png'
import postMan from '../assets/img/skills-postman.png'
import sqlImg from '../assets/img/skills-sql.png'
import reactImg from '../assets/img/skills-react.png'
import nodemonImg from "../assets/img/skills-nodemon.png"
export const Skills = () => {
    const skillsIcons = [
        { url: javaScript },
        { url: flask },
        { url: pythonImg },
        { url: githubImg },
        { url: vsCodeImg },
        { url: postMan },
        { url: sqlImg },
        { url: reactImg },
        { url: nodemonImg },
    ]
    return (
        <section
            style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }}
            id="skills">
            <div className="dimmer-skills">
                <div className="skills-left-top">
                </div>
                <div className="skills-left-middle">
                    <h1>Languages, tools and libraries </h1>
                </div>
                <div className="skills-left-bottom">
                    <div className="skills-spinning">
                        <div className="skills-spinning-wheel">
                            <div className="skills-spinning-wheel-inner">
                                {
                                    skillsIcons.map((x, index) => {
                                        return <div className="skills-spinning-inner-inner">
                                            <img key={index} src={x.url}></img>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="skills-paragraph-main">
                        <div className="not-all-clicked skills-paragraph-inner">
                            <h4>Languages</h4>
                            <p>HTML5, CSS, Javascript, JSX, Python, MongoDB, SQL </p>
                        </div>
                        <div className="not-all-clicked skills-paragraph-inner">
                            <h4>Libraries/Frameworks</h4>
                            <p>Node, Express, React, Flask, JQuery </p>
                        </div>
                        <div className="not-all-clicked skills-paragraph-inner">
                            <h4>Tools/Misc</h4>
                            <p>VsCode, Postman, Figma, Git, GitHub, Postgres, Npm </p>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <div className="skills-resume">
                        <button>View Resume</button>
                    </div>

                </div>


            </div>
        </section>
    )
}