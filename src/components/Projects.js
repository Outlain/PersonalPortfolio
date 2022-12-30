// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { useState, useEffect, useRef } from "react"
import projectImg1 from "../assets/img/Crypto-Website.png"
import projectImgGameOne from "../assets/img/fightingGame.png"
import instagramCss from "../assets/img/instagramCss.png"
import fitnessImg from "../assets/img/projectsFitnessWebsite.png"
import locationWorkImg from '../assets/img/projectLocationWork.png'
import cryptoV2 from '../assets/img/projectscryptov2.png'
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
    const fullStackWebsite = [
        {
            title: "Crypto Real Time Version 2 - (in Porgress)",
            description: 'Three pages crypto Website with realtime crypto data that auto updates prices and charts',
            imgUrl: cryptoV2,
            link: 'https://crypto-website-v2.vercel.app/',
            beta: true,
        },
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
        }
    ]
    const staticWebsite = [
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

    const empty = []

    const [projectType, setProjectType] = useState(empty)
    const [allClicked, setAllClicked] = useState('not-all-clicked project-two')
    const [isClicked, setIsClicked] = useState(false)
    const [fixing, setfixing] = useState(false)


    const handleOnclickGames = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === games[0].title) {
                clearInterval(scrollingId)
                // console.log(projectType[0].title)
                setProjectType(empty)
                setIsClicked(false)
            }
            if (projectType[0].title !== games[0].title) {
                clearInterval(scrollingId)
                // console.log(projectType[0].title)
                setfixing(!fixing)
                setProjectType(games)
                setIsClicked(true)
            }
        }
        if (projectType.length === 0) {
            clearInterval(scrollingId)
            setProjectType(games)
            setIsClicked(true)
        }
        // console.log(isClicked)
    }
    const handleOnclickDynamic = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === fullStackWebsite[0].title) {
                clearInterval(scrollingId)
                // console.log(projectType[0].title)
                setProjectType(empty)
                setIsClicked(false)
            }
            if (projectType[0].title !== fullStackWebsite[0].title) {
                // console.log(projectType[0].title)
                clearInterval(scrollingId)
                setfixing(!fixing)
                setProjectType(fullStackWebsite)
                setIsClicked(true)
            }
        }
        if (projectType.length === 0) {
            clearInterval(scrollingId)
            setProjectType(fullStackWebsite)
            setIsClicked(true)
        }
        // console.log(isClicked)
    }
    const handleOnclicStatic = () => {
        setAllClicked('project-clicked project-two')
        if (projectType.length > 0) {
            if (projectType[0].title === staticWebsite[0].title) {
                // console.log(projectType[0].title)
                setProjectType(empty)
                setIsClicked(false)
            }
            if (projectType[0].title !== staticWebsite[0].title) {
                // console.log(projectType[0].title)
                setfixing(!fixing)
                setProjectType(staticWebsite)
                setIsClicked(true)
            }
        }
        if (projectType.length === 0) {
            setProjectType(staticWebsite)
            setIsClicked(true)
        }
        // console.log(isClicked)
    }

    const scrollingId = useRef(null);

    useEffect(() => {
        console.log(`Change Has been Made to IsClicked : ${isClicked}`)

        function infiniteScroll() {
            if (!isClicked) {
                clearInterval(scrollingId)
            }

            if (isClicked) {

                // Get the scroll container element
                const scrollContainer = document.querySelector('.project-three');
                // Get the width of the scroll container element
                const scrollContainerWidth = scrollContainer.offsetWidth;
                console.log(scrollContainerWidth)
                // Get all the scroll elements within the scroll container
                const scrollElements = scrollContainer.querySelectorAll('.project-inner');
                const maxwidth = scrollElements[0].offsetWidth * (scrollElements.length)
                console.log(maxwidth)
                const differenceWidth = maxwidth - scrollContainerWidth

                console.log(differenceWidth)
                if (differenceWidth > 5) {
                    // Set the initial position of the scroll elements to the right of the scroll container
                    scrollElements.forEach((scrollElement, index) => {
                        scrollElement.style.transform = `translateX(${(scrollContainerWidth - (scrollContainerWidth / 4)) - scrollElement.offsetWidth}px)`;
                    });

                    // Set an interval to move the scroll elements to the left at a specific interval
                    setInterval(() => {
                        // Decrement the translateX value of the scroll elements by a small amount

                        scrollElements.forEach((scrollElement, index) => {
                            const currentTransform = scrollElement.style.transform;
                            const currentTranslateX = parseInt(currentTransform.split('(')[1].split('px')[0]);
                            scrollElement.style.transform = `translateX(${currentTranslateX - 1}px)`;
                        });

                        // Check if any of the scroll elements have moved out of the viewable area
                        for (let i = 0; i < scrollElements.length; i++) {
                            const currentScrollElement = scrollElements[i];
                            const currentScrollElementTransformObject = currentScrollElement.style.transform;
                            const currentScrollElementTranslateX = parseInt(currentScrollElementTransformObject.split('(')[1].split('px')[0]);

                            // Reset the current scroll element's position to the right of the scroll container if it's out of bounds
                            if (i > 0) {
                                // console.log((Math.abs(currentScrollElementTranslateX)))
                                // console.log(currentScrollElement.clientWidth)
                                if (currentScrollElementTranslateX + (currentScrollElement.clientWidth * (i + 1)) < 0) {
                                    currentScrollElement.style.transform = `translateX(${maxwidth - (currentScrollElement.clientWidth * (i + 1))}px)`;
                                }
                            } else {
                                // console.log((Math.abs(currentScrollElementTranslateX)))
                                // console.log(currentScrollElement.clientWidth)
                                if (currentScrollElementTranslateX + (currentScrollElement.clientWidth * (i + 1)) < 0) {
                                    currentScrollElement.style.transform = `translateX(${maxwidth - currentScrollElement.clientWidth}px)`;
                                }
                            }
                        }
                    }, 16);
                }
                // applying animation for divs with total lengths combined less than parent stucture width 
                // applying animation for divs with total lengths combined less than parent stucture width 
                else {
                    scrollElements.forEach((scrollElement, index) => {
                        scrollElement.style.transform = `translateX(${scrollElement.offsetWidth/2}px)`;
                    });

                    // Set an interval to move the scroll elements to the left at a specific interval
                    scrollingId.current = setInterval(() => {
                        // Decrement the translateX value of the scroll elements by a small amount

                        scrollElements.forEach((scrollElement, index) => {
                            const currentTransform = scrollElement.style.transform;
                            const currentTranslateX = parseInt(currentTransform.split('(')[1].split('px')[0]);
                            scrollElement.style.transform = `translateX(${currentTranslateX - 1}px)`;
                        });

                        // Check if any of the scroll elements have moved out of the viewable area
                        for (let i = 0; i < scrollElements.length; i++) {
                            const currentScrollElement = scrollElements[i];
                            const currentScrollElementTransformObject = currentScrollElement.style.transform;
                            const currentScrollElementTranslateX = parseInt(currentScrollElementTransformObject.split('(')[1].split('px')[0]);

                            // Reset the current scroll element's position to the right of the scroll container if it's out of bounds
                            if (i > 0) {
                                // console.log((Math.abs(currentScrollElementTranslateX)))
                                // console.log(currentScrollElement.clientWidth)
                                if (currentScrollElementTranslateX + (currentScrollElement.clientWidth * (i + 1)) < 0) {
                                    currentScrollElement.style.transform = `translateX(${scrollContainerWidth - currentScrollElement.clientWidth * (i)}px)`;
                                }
                            } else {
                                // console.log((Math.abs(currentScrollElementTranslateX)))
                                // console.log(currentScrollElement.clientWidth)
                                if (currentScrollElementTranslateX + (currentScrollElement.clientWidth * (i + 1)) < 0) {
                                    currentScrollElement.style.transform = `translateX(${scrollContainerWidth}px)`;
                                }
                            }
                        }
                    }, 16);


                } // The interval time in milliseconds
            }
        }
        if (isClicked) {
            infiniteScroll()
        }
    }, [isClicked, fixing])

    console.log(scrollingId)
    return (
        <section id="projects">
            <div className="dimmer2">
                <section className="project-one">
                    <h1>Projects</h1>
                    <p>These are the projects I have worked on ranging from hours to days to weeks to complete! <br /> They are organized into three actagories, Mini-games (usually through CANVAS or PyGame), Full-Stack websites that range from API to full CRUD, and MISC for all others!</p>
                </section>
                <section className={allClicked}>
                    <button onClick={handleOnclickGames} className="left">Mini-Games</button>
                    <button onClick={handleOnclickDynamic} className="center">Dynamic Websites</button>
                    <button onClick={handleOnclicStatic} className="right">Static Websites</button>
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