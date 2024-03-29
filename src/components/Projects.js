import { useState, useEffect, useRef, useMemo } from "react";
import projectImg1 from "../assets/img/Crypto-Website.png";
import projectImgGameOne from "../assets/img/fightingGame.png";
import instagramCss from "../assets/img/instagramCss.png";
import fitnessImg from "../assets/img/projectsFitnessWebsite.png";
import locationWorkImg from "../assets/img/projectLocationWork.png";
import cryptoV2 from "../assets/img/projectscryptov2.png";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    const games = [
        {
            title: "Fighting Game",
            description: "1v1 fighting Game coded in Javascript with Canvas",
            imgUrl: projectImgGameOne,
            link: "https://carlos-game-fightingko.netlify.app/",
            beta: false,
        },
        {
            title: "Fighting Game   ",
            description: "1v1 fighting Game coded in Javascript with Canvas",
            imgUrl: projectImgGameOne,
            link: "https://carlos-game-fightingko.netlify.app/",
            beta: false,
        },
        {
            title: "    Fighting Game",
            description: "1v1 fighting Game coded in Javascript with Canvas",
            imgUrl: projectImgGameOne,
            link: "https://carlos-game-fightingko.netlify.app/",
            beta: false,
        },
    ];
    const fullStackWebsite = [
        {
            title: "Crypto Real Time Version 2",
            description:
                "Three pages crypto Website with realtime crypto data that auto updates prices and charts",
            imgUrl: cryptoV2,
            link: "https://crypto-website-v2.vercel.app/",
            beta: false,
        },
        {
            title: "Crypto API",
            description:
                "Crypto Website with real time crypto news and crypto prices",
            imgUrl: projectImg1,
            link: "https://carlos-crypto-project.netlify.app/",
            beta: false,
        },
        {
            title: "Fitness Tracker- (in Porgress)",
            description:
                "Fitness Website with SQL database that includes full crud functionality and tracks your workouts everyday",
            imgUrl: fitnessImg,
            link: "https://fitness-project-carlos.netlify.app/",
            beta: true,
        },
    ];
    const staticWebsite = [
        {
            title: "Geolocation South-Florida",
            description:
                "Fully Functioning Website with hardcorded data on communities in South-Florida",
            imgUrl: locationWorkImg,
            link: "https://carlosgeolocation.netlify.app/",
            beta: false,
        },
        {
            title: "Instagram Clone",
            description: "Simple HTML CSS of Instagrams webpage",
            imgUrl: instagramCss,
            link: "https://leafy-trifle-02c195.netlify.app/",
            beta: false,
        },
        {
            title: "    Geolocation South-Florida",
            description:
                "Fully Functioning Website with hardcorded data on communities in South-Florida",
            imgUrl: locationWorkImg,
            link: "https://carlosgeolocation.netlify.app/",
            beta: false,
        },
        {
            title: "    Instagram Clone",
            description: "Simple HTML CSS of Instagrams webpage",
            imgUrl: instagramCss,
            link: "https://leafy-trifle-02c195.netlify.app/",
            beta: false,
        },
    ];

    const empty = [];

    const [projectType, setProjectType] = useState(empty);
    const [allClicked, setAllClicked] = useState("not-all-clicked project-two");
    const [isClicked, setIsClicked] = useState(false);
    const [fixing, setfixing] = useState(false);
    const [fixingP, setFixingP] = useState('');
    const [elementHovered, setElementHovered] = useState(false);
    const [tabChosenGames, setTabChosenGames] = useState(false);
    const [tabChosenDynamic, setTabChosenDynamic] = useState(false);
    const [tabChosenStatic, setTabChosenStatic] = useState(false);
    // const [currentProjectsParagraph, setCurrentProjectsParagraph] = useState('')
    const projectsParagraph = `These are my projects I have built so far. <br>
     Mini-Games are games I have coded from the ground up<br> 
    Dynamic Websites include wide variety of CRUD, API, Websocket, Databases MySQL ect ... to create a website with a overall theme<br>
     Static Websites are simple websites created to help in daily tasks or problems or just general styling'`



    const handleScrollOver = () => {
        setElementHovered(true);
        // console.log(`The hovering/mousover/touch even has changed : ${elementHovered}`)
    };

    const handleScrollOut = () => {
        setElementHovered(false);
        // console.log(`The hovering/mousover/touch even has changed : ${elementHovered}`)
    };

    const handleOnclickGames = () => {
        setAllClicked("project-clicked project-two");
        if (projectType.length > 0) {
            if (projectType[0].title === games[0].title) {
                // console.log(projectType[0].title)
                setProjectType(empty);
                setIsClicked(false);
            }
            if (projectType[0].title !== games[0].title) {
                // console.log(projectType[0].title)
                setProjectType(games);
                setIsClicked(true);
            }
        }
        if (projectType.length === 0) {
            setProjectType(games);
            setIsClicked(true);
        }
        // console.log(isClicked)
        setfixing(!fixing);
    };
    const handleOnclickDynamic = () => {
        setAllClicked("project-clicked project-two");
        if (projectType.length > 0) {
            if (projectType[0].title === fullStackWebsite[0].title) {
                // console.log(projectType[0].title)
                setProjectType(empty);
                setIsClicked(false);
            }
            if (projectType[0].title !== fullStackWebsite[0].title) {
                // console.log(projectType[0].title)
                setProjectType(fullStackWebsite);
                setIsClicked(true);
            }
        }
        if (projectType.length === 0) {
            setProjectType(fullStackWebsite);
            setIsClicked(true);
        }
        // console.log(isClicked)
        setfixing(!fixing);
    };
    const handleOnclicStatic = () => {
        setAllClicked("project-clicked project-two");
        if (projectType.length > 0) {
            if (projectType[0].title === staticWebsite[0].title) {
                // console.log(projectType[0].title)
                setProjectType(empty);
                setIsClicked(false);
            }
            if (projectType[0].title !== staticWebsite[0].title) {
                // console.log(projectType[0].title)
                setProjectType(staticWebsite);
                setIsClicked(true);
            }
        }
        if (projectType.length === 0) {
            setProjectType(staticWebsite);
            setIsClicked(true);
        }
        // console.log(isClicked)
        setfixing(!fixing);
    };



    const scrollingId = useRef(null);

    useEffect(() => {
        // console.log(`Change Has been Made to IsClicked : ${isClicked}`)

        function infiniteScroll() {
            try {
                if (!isClicked) {
                    clearInterval(scrollingId.current);
                }
                if (isClicked) {
                    // Get the scroll container element
                    const scrollContainer = document.querySelector(".project-three");
                    // Get the width of the scroll container element
                    const scrollContainerWidth = scrollContainer.offsetWidth;
                    // console.log(scrollContainerWidth);
                    // Get all the scroll elements within the scroll container
                    const scrollElements =
                        scrollContainer.querySelectorAll(".project-inner");
                    const maxwidth = scrollElements[0].offsetWidth * scrollElements.length;
                    // console.log(maxwidth);
                    const differenceWidth = maxwidth - scrollContainerWidth;

                    // console.log(differenceWidth);
                    if (differenceWidth > 5) {
                        // REMOVED STYLING AND ADDED DIRECTLY INTO CSS SO ELEMENTES WOULD NOT CHANGE LOCATION DURING ON HOVER EVEN CHANGES
                        // Set the initial position of the scroll elements to the right of the scroll container
                        // scrollElements.forEach((scrollElement, index) => {
                        //     scrollElement.style.transform = `translateX(${scrollContainerWidth -
                        //         scrollContainerWidth / 4 -
                        //         scrollElement.offsetWidth
                        //         }px)`;
                        // });

                        // Set an interval to move the scroll elements to the left at a specific interval
                        clearInterval(scrollingId.current);

                        scrollingId.current = setInterval(() => {
                            // Decrement the translateX value of the scroll elements by a small amount

                            scrollElements.forEach((scrollElement, index) => {
                                const currentTransform = scrollElement.style.transform;
                                const currentTranslateX = parseInt(
                                    currentTransform.split("(")[1].split("px")[0]
                                );
                                scrollElement.style.transform = `translateX(${currentTranslateX - 1
                                    }px)`;
                            });

                            // Check if any of the scroll elements have moved out of the viewable area
                            for (let i = 0; i < scrollElements.length; i++) {
                                const currentScrollElement = scrollElements[i];
                                const currentScrollElementTransformObject =
                                    currentScrollElement.style.transform;
                                const currentScrollElementTranslateX = parseInt(
                                    currentScrollElementTransformObject.split("(")[1].split("px")[0]
                                );

                                // Reset the current scroll element's position to the right of the scroll container if it's out of bounds
                                if (i > 0) {
                                    // console.log((Math.abs(currentScrollElementTranslateX)))
                                    // console.log(currentScrollElement.clientWidth)
                                    if (
                                        currentScrollElementTranslateX +
                                        currentScrollElement.clientWidth * (i + 1) <
                                        0
                                    ) {
                                        currentScrollElement.style.transform = `translateX(${maxwidth - currentScrollElement.clientWidth * (i + 1)
                                            }px)`;
                                    }
                                } else {
                                    // console.log((Math.abs(currentScrollElementTranslateX)))
                                    // console.log(currentScrollElement.clientWidth)
                                    if (
                                        currentScrollElementTranslateX +
                                        currentScrollElement.clientWidth * (i + 1) <
                                        0
                                    ) {
                                        currentScrollElement.style.transform = `translateX(${maxwidth - currentScrollElement.clientWidth
                                            }px)`;
                                    }
                                }
                            }
                        }, 10);
                    }
                    // applying animation for divs with total lengths combined less than parent stucture width
                    // applying animation for divs with total lengths combined less than parent stucture width
                    else {
                        // REMOVED STYLING AND ADDED DIRECTLY INTO CSS SO ELEMENTES WOULD NOT CHANGE LOCATION DURING ON HOVER EVEN CHANGES
                        // scrollElements.forEach((scrollElement, index) => {
                        //     scrollElement.style.transform = `translateX(${scrollElement.offsetWidth / 2
                        //         }px)`;
                        // });

                        // Set an interval to move the scroll elements to the left at a specific interval
                        clearInterval(scrollingId.current);

                        scrollingId.current = setInterval(() => {
                            // Decrement the translateX value of the scroll elements by a small amount

                            scrollElements.forEach((scrollElement, index) => {
                                const currentTransform = scrollElement.style.transform;
                                const currentTranslateX = parseInt(
                                    currentTransform.split("(")[1].split("px")[0]
                                );
                                scrollElement.style.transform = `translateX(${currentTranslateX - 1
                                    }px)`;
                            });

                            // Check if any of the scroll elements have moved out of the viewable area
                            for (let i = 0; i < scrollElements.length; i++) {
                                const currentScrollElement = scrollElements[i];
                                const currentScrollElementTransformObject =
                                    currentScrollElement.style.transform;
                                const currentScrollElementTranslateX = parseInt(
                                    currentScrollElementTransformObject.split("(")[1].split("px")[0]
                                );

                                // Reset the current scroll element's position to the right of the scroll container if it's out of bounds
                                if (i > 0) {
                                    // console.log((Math.abs(currentScrollElementTranslateX)))
                                    // console.log(currentScrollElement.clientWidth)
                                    if (
                                        currentScrollElementTranslateX +
                                        currentScrollElement.clientWidth * (i + 1) <
                                        0
                                    ) {
                                        currentScrollElement.style.transform = `translateX(${scrollContainerWidth - currentScrollElement.clientWidth * i
                                            }px)`;
                                    }
                                } else {
                                    // console.log((Math.abs(currentScrollElementTranslateX)))
                                    // console.log(currentScrollElement.clientWidth)
                                    if (
                                        currentScrollElementTranslateX +
                                        currentScrollElement.clientWidth * (i + 1) <
                                        0
                                    ) {
                                        currentScrollElement.style.transform = `translateX(${scrollContainerWidth}px)`;
                                    }
                                }
                            }
                        }, 10);
                    } // The interval time in milliseconds
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (isClicked) {
            infiniteScroll();
        }
    }, [isClicked, fixing]);

    useEffect(() => {
        if (elementHovered && isClicked) {
            // console.log('hovering')
            clearInterval(scrollingId.current);
        } else {
            setfixing(!fixing);
        }
    }, [elementHovered]);


    useEffect(() => {
        if (!isClicked) {
            setTabChosenGames(false)
            setTabChosenDynamic(false)
            setTabChosenStatic(false)
        }
        // console.log(`Tab Hovered ${tabHovered}, ProjectType ${[projectType]}`)
        if (projectType.length > 0) {

            // console.log(projectType[0].title === games[0].title)
            if (isClicked && projectType[0].title === games[0].title) {
                // console.log('Games Chosen')
                setTabChosenGames(true)
            } else {
                setTabChosenGames(false)
            }
            if (isClicked && projectType[0].title === fullStackWebsite[0].title) {
                // console.log('Dynamic Website Chosen')
                setTabChosenDynamic(true)
            } else {
                setTabChosenDynamic(false)
            }
            if (isClicked && projectType[0].title === staticWebsite[0].title) {
                // console.log('Staic Website Chosen')
                setTabChosenStatic(true)
            } else {
                setTabChosenStatic(false)
            }
        }
    }, [isClicked, projectType, tabChosenStatic, fixing]);



    const memoizedCards = useMemo(() => {
        return projectType.map((project) => (
            <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                link={project.link}
                beta={project.beta}
            />
        ));
    }, [projectType]);

    const paragrpahId = useRef(null);
    const currentProjectPSlice = useRef(1);
    const currentProjectsParagraph = useRef(1);

    const myDivParagraph = useRef(null);
    // const [differential, setDifferential] = useState(Math.floor(Math.random() * (200 - 80 + 1)) + 80)
    const differential = useRef(Math.floor(Math.random() * (55 - 25 + 1)) + 30);

    useEffect(() => {
        function randomNumber() {
            const rand = Math.random();
            if (rand <= 0.85) {
                return Math.floor(Math.random() * (55 - 25 + 1)) + 30;
            } else {
                return Math.floor(Math.random() * (150 - 109 + 1)) + 90;
            }
        }
        const element = document.getElementById('writing-effect');

        function writeParagraph() {
            // console.log(differential.current)
            element.scrollTop = element.scrollHeight;
            clearInterval(paragrpahId.current);
            paragrpahId.current = setInterval(writeParagraph, differential.current);

            if (currentProjectsParagraph.current.length >= projectsParagraph.length) {
                clearInterval(paragrpahId.current);
            }
            setFixingP(projectsParagraph.slice(0, currentProjectPSlice.current))
            currentProjectsParagraph.current = projectsParagraph.slice(0, currentProjectPSlice.current)
            currentProjectPSlice.current = currentProjectPSlice.current + 1
            if (projectsParagraph[currentProjectPSlice.current - 1] === '<') {
                differential.current = 1;
            }
            if (projectsParagraph[currentProjectPSlice.current - 2] === ',' || projectsParagraph[currentProjectPSlice.current - 2] === '.') {
                differential.current = 450;
            } else {
                differential.current = randomNumber()
            }
        }

        const currentDiv = myDivParagraph.current

        const observer = new IntersectionObserver(entries => {
            // Loop through the entries
            entries.forEach(entry => {
                // Check if the entry is intersecting (i.e. visible in the viewport)
                if (entry.isIntersecting) {
                    // Check if the entry's intersection ratio (i.e. the percentage of the element that is visible in the viewport) is greater than or equal to 0.05 (5%)
                    if (entry.intersectionRatio >= 0.05) {
                        // Do something when the div comes into view
                        //   console.log('Div is in view');
                        clearInterval(paragrpahId.current);
                        paragrpahId.current = setInterval(() => {
                            writeParagraph();
                        }, differential.current)

                    }
                }
            });
        }, { threshold: 0.02 }); // Set the threshold to 0.05 (5% of the element's area must be visible in the viewport)
        // Start observing the div
        observer.observe(currentDiv);
        // Return a cleanup function to clearInterval and disconnect the observer when the component unmounts
        return () => {
            clearInterval(paragrpahId.current);
            observer.disconnect();
        };
    }, []); // The empty array ensures that the effect is only run once, when the component mounts


    return (
        <section id="projects">
            <div className="dimmer2">
                <section className="project-one">
                    <h1>Projects</h1>
                    <p id="writing-effect" ref={myDivParagraph} dangerouslySetInnerHTML={{ __html: fixingP }}></p>

                </section>
                <section className={allClicked}>
                    <button
                        onClick={handleOnclickGames}
                        className={tabChosenGames === true ? 'left-chosen left' : 'left'}>
                        Mini-Games
                    </button>
                    <button
                        onClick={handleOnclickDynamic}
                        className={tabChosenDynamic === true ? 'center-chosen center' : 'center'}>
                        Dynamic Websites
                    </button>
                    <button
                        onClick={handleOnclicStatic}
                        className={tabChosenStatic === true ? 'right-chosen right' : 'right'}>
                        Static Websites
                    </button>
                </section>
                <section
                    onMouseOver={handleScrollOver}
                    onMouseOut={handleScrollOut}
                    onTouchStart={handleScrollOver}
                    onTouchEnd={handleScrollOut}
                    className="project-three">
                    {memoizedCards}
                </section>
            </div>
        </section>
    );
};


export default Projects;