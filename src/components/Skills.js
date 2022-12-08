import stars from "../assets/img/stars.gif"


export const Skills = () => {

    return (
        <section
            style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }}
            id="skills">
            <div className="dimmer-skills">
                <div className="skills-left-top">
                </div>
                <div className="skills-left-middle">
                    <h1>Languages tools and libraries </h1>
                </div>
                <div className="skills-left-bottom">
                    <div className="skills-spinning">
                        <div className="skills-spinning-wheel"></div>
                    </div>
                    <div className="skills-paragraph-main">
                        <div className="skills-paragraph-inner">
                            <h4>Languages</h4>
                            <p>HTML5, CSS, Javascript, JSX, Python, MongoDB, SQL </p>
                        </div>
                        <div className="skills-paragraph-inner">
                            <h4>Libraries/Frameworks</h4>
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
                        <h4>View Resume</h4>
                    </div>

                </div>


            </div>
        </section>
    )
}