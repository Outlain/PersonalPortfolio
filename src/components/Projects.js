// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/Crypto-Website.png"
import projectImgGameOne from "../assets/img/fightingGame.png"
import { useState } from "react"
import { ProjectCard } from "../components/ProjectCard"



export const Projects = () => {

    const games = [
        {
            title: "Fighting Game",
            description: '1v1 fighting Game coded in Javascript with Canvas',
            imgUrl: projectImgGameOne,
            link: 'https://carlos-game-fightingko.netlify.app/'
        },

    ]
    const fullStack = [
        {
            title: "Crypto API",
            description: 'Crypto Website with real time crypto news and crypto prices',
            imgUrl: projectImg1,
            link: 'https://carlos-crypto-project.netlify.app/'
        },
    ]
    const misc = [
        {
            title: "Crypto API",
            description: 'Crypto Website with real time crypto news and crypto prices',
            imgUrl: projectImg1,
            link: 'https://carlos-game-fightingko.netlify.app/'
        },
    ]

    const [projectType, setProjectType] = useState(fullStack)

    const handleOnclickGames = () => {
        setProjectType(games)
    }
    const handleOnclickFullStack = () => {
        setProjectType(fullStack)
    }
    const handleOnclickMisc = () => {
        setProjectType(misc)
    }

    return (
        <section id="projects">
            <div className="dimmer2">
                <section className="project-one">
                    <h1>Projects</h1>
                    <p>Pariatur et ea commodo non labore culpa. Non dolor minim labore incididunt consectetur proident. Ex velit magna id in amet. Ad est occaecat sit labore.</p>
                </section>
                <section className="project-two">
                    <button onClick={handleOnclickGames} className="left">Games</button>
                    <button onClick={handleOnclickFullStack} className="center">Full-Stack</button>
                    <button onClick={handleOnclickMisc} className="right">Misc</button>
                </section>
                <section className="project-three">
                    {
                        projectType.map((x, index) => {
                            return (
                                <ProjectCard key={index} {...x} />
                            )
                        })
                    }
                </section>
            </div>
        </section>

    )


}