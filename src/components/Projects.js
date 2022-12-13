// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/Crypto-Website.png"
import projectImgGameOne from "../assets/img/fightingGame.png"
import instagramCss from "../assets/img/instagramCss.png"
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
            title: "Instagram Clone",
            description: 'Simple HTML CSS of Instagrams webpage',
            imgUrl: instagramCss,
            link: 'https://leafy-trifle-02c195.netlify.app/'
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