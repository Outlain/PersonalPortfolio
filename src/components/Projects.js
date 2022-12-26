// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/Crypto-Website.png"
import projectImgGameOne from "../assets/img/fightingGame.png"
import instagramCss from "../assets/img/instagramCss.png"
import fitnessImg from "../assets/img/projectsFitnessWebsite.png"
import locationWorkImg from '../assets/img/projectLocationWork.png'
import cryptoV2 from '../assets/img/projectscryptov2.png'
import { useState } from "react"
import { ProjectCard } from "../components/ProjectCard"



export const Projects = () => {

    const games = [
        {
            title: "Fighting Game",
            description: '1v1 fighting Game coded in Javascript with Canvas',
            imgUrl: projectImgGameOne,
            link: 'https://carlos-game-fightingko.netlify.app/',
            beta: false,
        },

    ]
    const fullStack = [
        {
            title: "Crypto API",
            description: 'Crypto Website with real time crypto news and crypto prices',
            imgUrl: projectImg1,
            link: 'https://carlos-crypto-project.netlify.app/',
            beta: false,
        },
        {
            title: "Fitness Tracker- (in Porgress)",
            description: 'Fitness Website with SQL database that includes full crud functionality and tracks your workouts everyday',
            imgUrl: fitnessImg,
            link: 'https://fitness-project-carlos.netlify.app/',
            beta: true,
        },
        {
            title: "Crypto Real Time Version 2 - (in Porgress)",
            description: 'Three pages crypto Website with realtime crypto data that auto updates prices and charts',
            imgUrl: cryptoV2,
            link: 'https://crypto-website-v2-jh4ifmi0m-outlain.vercel.app/',
            beta: true,
        }
    ]
    const misc = [
        {
            title: "Geolocation South-Florida",
            description: 'Fully Functioning Website with hardcorded data on communities in South-Florida',
            imgUrl: locationWorkImg,
            link: 'https://carlosgeolocation.netlify.app/',
            beta: false,
        },
        {
            title: "Instagram Clone",
            description: 'Simple HTML CSS of Instagrams webpage',
            imgUrl: instagramCss,
            link: 'https://leafy-trifle-02c195.netlify.app/',
            beta: false,
        },
    ]

    const empty = [

    ]

    const [projectType, setProjectType] = useState(empty)
    const [allClicked, setAllClicked] = useState('not-all-clicked project-two')

    const handleOnclickGames = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === games[0].title) {
                console.log(projectType[0].title)
                setProjectType(empty)
            }
            if (projectType[0].title !== games[0].title) {
                console.log(projectType[0].title)
                setProjectType(games)
            }
        }
        if (projectType.length === 0) {
            setProjectType(games)
        }
    }
    const handleOnclickFullStack = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === fullStack[0].title) {
                console.log(projectType[0].title)
                setProjectType(empty)
            }
            if (projectType[0].title !== fullStack[0].title) {
                console.log(projectType[0].title)
                setProjectType(fullStack)
            }
        }
        if (projectType.length === 0) {
            setProjectType(fullStack)
        }
    }
    const handleOnclickMisc = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === misc[0].title) {
                console.log(projectType[0].title)
                setProjectType(empty)
            }
            if (projectType[0].title !== misc[0].title) {
                console.log(projectType[0].title)
                setProjectType(misc)
            }
        }
        if (projectType.length === 0) {
            setProjectType(misc)
        }
    }

    return (
        <section id="projects">
            <div className="dimmer2">
                <section className="project-one">
                    <h1>Projects</h1>
                    <p>These are the projects I have worked on ranging from hours to days to weeks to complete! <br /> They are organized into three actagories, Mini-games (usually through CANVAS or PyGame), Full-Stack websites that range from API to full CRUD, and MISC for all others!</p>
                </section>
                <section className={allClicked}>
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