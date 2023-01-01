import { useEffect, useState, useRef } from "react";
import axios from 'axios';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Developer", "Web Designer", "UX/UI Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 500;
    const [quotes, SetQuotes] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: process.env.REACT_APP_BANNER_URL,
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            SetQuotes(response.data)

        }).catch(function (error) {
            console.error(error);
        });
        // if (quotes) { console.log(quotes) }
    }, []);

    useEffect(() => {
        if (quotes) {
            quotes.sort((a, b) => {
                if (a.length < b.length) return 1;
                if (a.length > b.length) return -1;
                return 0;
            });
        }
    }, [quotes]);
    // if (quotes) { console.log(quotes)}
    // console.log(quotes)

    useEffect(() => {
        const tick = () => {
            if (loopNum > toRotate.length - 1) {
                setLoopNum(0)
            }
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let displayingText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

            setText(displayingText);
            // console.log(i)
            // console.log(loopNum)

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 1.3)
            }

            if (!isDeleting && displayingText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && displayingText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(300);
            }
        }
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const scrollingId = useRef(null);


    useEffect(() => {

        const quotesWrapper = document.querySelector('.banner-right');
        const quotesWrapperHeight = document.querySelector('#home').offsetHeight
        const innerQuotesArray = [...quotesWrapper.children]
        const innerQuotesHeight = innerQuotesArray[0].offsetHeight;
        // console.log(innerQuotesArray)

        // SET INDIVIDUAL Y TRANSLATE HEIGHTS SO EACH ELEMENT HAS ITS CORERCT HIGHT TRANSLATION TO PUT IT RIGHT ABOVE THE PAGE
        innerQuotesArray[0].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 5}px)`;
        innerQuotesArray[1].style.transform = `translateY(${-quotesWrapperHeight}px)`;
        innerQuotesArray[2].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 2}px)`;
        innerQuotesArray[3].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 2}px)`;
        innerQuotesArray[5].style.transform = `translateY(${-quotesWrapperHeight}px)`;
        innerQuotesArray[4].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight}px)`;


        console.log(innerQuotesArray[1])
        function tetris() {
            if (scrollingId.current) {
                clearInterval(scrollingId.current);
            }
            var currentQuote = 0
            var acceleration = 1

            const currentQuoteArray = [1, 5, 4, 3, 2, 0]
            scrollingId.current = setInterval(() => {
                console.log('Running')
                const currentTransform = innerQuotesArray[currentQuoteArray[currentQuote]].style.transform;
                // console.log(currentTransform)
                const currentTranslateY = parseInt(
                    currentTransform.split("(")[1].split("px")[0]
                );

                innerQuotesArray[currentQuoteArray[currentQuote]].style.transform = `translateY(${currentTranslateY + 1 + acceleration}px)`
                if (acceleration < 6) {
                    acceleration = acceleration * 1.02
                }
                if (currentTranslateY >= 0) {
                    innerQuotesArray[currentQuoteArray[currentQuote]].style.transform = `translateY(${0}px)`
                    acceleration = 1
                    currentQuote += 1
                }
                if (currentQuote === currentQuoteArray.length && currentTranslateY >= 0) {

                    innerQuotesArray[0].classList.add("creation1");
                    innerQuotesArray[1].classList.add("creation");
                    innerQuotesArray[2].classList.add("creation");
                    innerQuotesArray[3].classList.add("creation");
                    innerQuotesArray[4].classList.add("creation1");
                    innerQuotesArray[5].classList.add("creation1");

                    clearInterval(scrollingId.current);

                }

            }, 10);

        }

        tetris()

    }, [])


    return (

        <section className="banner" id='home'>
            <div className="dimmer">
                <div className="banner-top"></div>
                <div className="banner-left-top">
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>Hello, I'm Carlos <br /> Amado Roller</h1>
                </div>
                <div className="banner-left-middle">
                    <h1 className="wrap">{text}</h1>
                </div>
                <div className="banner-left-bottom">
                    <h5> I am a full-stack web developer with expertise in JavaScript, HTML, CSS, React, Node.js, and SQL. I have experience building scalable and secure RESTful APIs and responsive web applications. I am passionate about staying up-to-date on the latest technologies and am excited to bring my skills and enthusiasm to your team as we work on innovative and engaging web applications.</h5>
                </div>
                <div className="banner-right">
                    <h6 className="banner-right-top" >{quotes ? quotes[0] : ''} </h6>
                    <h6 className="banner-right-right" >{quotes ? quotes[1] : ''} </h6>
                    <h6 className="banner-right-left-top-left" >{quotes ? quotes[2] : ''} </h6>
                    <h6 className="banner-right-left-top-right" >{quotes ? quotes[3] : ''} </h6>
                    <h6 className="banner-right-left-bottom-top" >{quotes ? quotes[4] : ''} </h6>
                    <h6 className="banner-right-left-bottom-bottom" >{quotes ? quotes[5] : ''} </h6>
                </div>
            </div>
        </section>
    )

}