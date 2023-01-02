import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import axiosRetry from "axios-retry";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Developer", "Web Designer", "UX/UI Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 500;
    const [quotes, SetQuotes] = useState(null);
    const [styling, setStyling] = useState('something')

    useEffect(() => {

        const optionsBackUp = {
            method: 'GET',
            url: process.env.REACT_APP_BANNER_URL_V_TWO,
        };

        axiosRetry(axios, {
            retries: 10,
            retryDelay: (retryCount) => {
                return retryCount * 2000;
            }
        }); // retry the request up to 10 times, with a 1 second delay between each retry

        axios.request(optionsBackUp).then(function (response) {
            SetQuotes(response.data)
        }).catch(function (errorBackup) {
            console.error(errorBackup)
        })
    }, []);

    useEffect(() => {
        if (quotes) {
            quotes.sort((a, b) => {
                if (a.quote.length < b.quote.length) return 1;
                if (a.quote.length > b.quote.length) return -1;
                return 0;
            });
        }
        // console.log(quotes)
    }, [quotes]);
    // if (quotes) { console.log(quotes)}

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

    const scrollingId = useRef(false);


    useEffect(() => {

        let paragraphWrapper = document.querySelectorAll('.banner-left-bottom > h5');
        paragraphWrapper = paragraphWrapper[0]
        const quotesWrapper = document.querySelector('.banner-right');
        const quotesWrapperHeight = document.querySelector('#home').offsetHeight
        const innerQuotesArray = [...quotesWrapper.children]
        const innerQuotesHeight = innerQuotesArray[0].offsetHeight;
        const realQuotesWrapperHeight = document.querySelector('.banner-right').offsetHeight
        const realQuotesWrapperWidth = document.querySelector('.banner-right').offsetWidth
        const squareHeight = realQuotesWrapperHeight / 6
        const squareWidth = realQuotesWrapperWidth / 3
        // console.log(innerQuotesArray)
        const webpageWidth = document.documentElement.clientWidth;
        // console.log(webpageWidth)
        if (webpageWidth >= 1500 && webpageWidth <= 1810) {
            setStyling(
                `
        @keyframes right_top {
            0% {
        
            }
            45% {

            }
            50% {
                transform-origin: right;
                height: ${squareWidth}px;
                width: ${squareHeight * 5}px;
                transform: translateX(${-squareWidth + squareWidth / 2.65}px) translateY(${+ squareWidth / 8}px)rotate(-90deg)
            }
            70% {
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
          }
          @keyframes right_right {
            0% {

              }
              45% {

              }
              50% {
                transform-origin: right;
                height: ${squareWidth * 3}px;
                width: ${squareHeight}px;
                transform: translateX(${-squareWidth - squareWidth / 8}px) translateY(${-squareHeight * 3 - squareHeight / 2.5}px)rotate(-90deg)
              }
            70%{
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
          }
          @keyframes right_left_top_left {
            0% {

            }
            45% {

            }
            50% {
                transform-origin: left;
                height: ${squareWidth * 2}px;
                width: ${squareHeight}px;
                transform: translateX(${squareWidth}px) translateY(${squareHeight * 3 - squareHeight / 1.7}px)rotate(-90deg)
            }
            70% {
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
          }
          @keyframes right_left_top_right {
            0% {

            }

            45% {

            }
            50% {
                transform-origin: left;
                height: ${squareWidth * 2}px;
                width: ${squareHeight}px;
                transform: translateX(${0}px) translateY(${squareHeight * 4 - squareHeight / 1.7}px)rotate(-90deg)
            }
            70% {
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
          }
          @keyframes right_left_bottom_top {
            0% {

            }
            45% {

            }
            50% {
                transform-origin: right;
                height: ${squareWidth}px;
                width: ${squareHeight * 3}px;
                transform: translateX(${-squareWidth / 2.7}px) translateY(${-squareHeight + squareHeight / 5}px) rotate(90deg)
            }
            70% {
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
          }
          @keyframes right_left_bottom_bottom {
            0% {

            }
            45% {

            }
            50% {
                transform-origin: right;
                height: ${squareWidth}px;
                width: ${squareHeight * 3}px;
                transform: translateX(${-squareWidth - squareWidth / 2.6}px) translateY(${-squareHeight - squareHeight / 1.25}px) rotate(90deg)
            }
            70% {
                transform-origin: right;
                height: auto;
                width: auto;
                transform: translateX(${0}px) translateY(${0}px) rotate(0deg)
            }
            100%{

            }
            }
            @keyframes glow {
                0% {
                    border: solid 0.1rem #b38a74;
                }
                1% {
                    border: none;

                }
                45% {
    
                }
                70% {
                }
                71% {
                    border: solid 0.1rem #b38a74;

                }
                100%{
                    border: solid 0.1rem #b38a74;

                }
            }
          
          `
            )
        } else {

            setStyling(
                `
          @keyframes right_top {
            0% {

            }
            45% {

            }
            50% {
                transform: translateX(${squareWidth}px)
            }
            65% {
                transform: translateX(${0}px)

            }
            100%{

            }
          }
          @keyframes right_right {
            0% {

            }
            45% {

            }
            50% {

            }
            65% {

            }
            100%{

            }
          }
          @keyframes right_left_top_left {
            0% {

            }
            45% {

            }
            50% {
               transform: translateY(${-squareHeight}px)
            }
            65% {
                transform: translateY(${0}px)

            }
            100%{

            }
          }
          @keyframes right_left_top_right {
            0% {

            }
            45% {

            }
            50% {
                transform: translateY(${squareHeight}px)
            }
            65% {
                transform: translateY(${0}px)

            }
            100%{

            }
          }
          @keyframes right_left_bottom_top {
            0% {

            }
            45% {

            }
            50% {
                transform: translateX(${-squareWidth}px)
            }
            65% {
                transform: translateX(${0}px)

            }
            100%{

            }
          }
          @keyframes right_left_bottom_bottom {
            0% {

            }
            45% {

            }
            50% {

            }
            65% {

            }
            100%{

            }
         }
         @keyframes glow {
            0% {
                border: solid 0.1rem #b38a74;

            }
            2% {
                border: none;

            }
            61% {
            }

            66% {
                border: solid 0.1rem #b38a74;

            }
            100%{
                border: solid 0.1rem #b38a74;

            }
        }
          
          `
            )
        }


        // SET INDIVIDUAL Y TRANSLATE HEIGHTS SO EACH ELEMENT HAS ITS CORERCT HIGHT TRANSLATION TO PUT IT RIGHT ABOVE THE PAGE
        innerQuotesArray[0].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 5}px)`;
        innerQuotesArray[1].style.transform = `translateY(${-quotesWrapperHeight}px)`;
        innerQuotesArray[2].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 2}px)`;
        innerQuotesArray[3].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight * 2}px)`;
        innerQuotesArray[5].style.transform = `translateY(${-quotesWrapperHeight}px)`;
        innerQuotesArray[4].style.transform = `translateY(${-quotesWrapperHeight + innerQuotesHeight}px)`;


        // console.log(innerQuotesArray[1])
        function tetris() {
            clearInterval(scrollingId.current);

            if (scrollingId.current) {
                clearInterval(scrollingId.current);
            }
            var currentQuote = 0
            var acceleration = 1

            const currentQuoteArray = [1, 5, 4, 3, 2, 0]
            if (scrollingId.current) { clearInterval(scrollingId.current); }
            scrollingId.current = setInterval(() => {
                try {
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

                        innerQuotesArray[0].classList.add("banner_right_top_animation");
                        innerQuotesArray[1].classList.add("banner_right_right_animation");
                        innerQuotesArray[2].classList.add("banner_right_left_top_left_animation");
                        innerQuotesArray[3].classList.add("banner_right_left_top_right_animation");
                        innerQuotesArray[4].classList.add("banner_right_left_bottom_top_animation");
                        innerQuotesArray[5].classList.add("banner_right_left_bottom_bottom_animation");
                        quotesWrapper.classList.add("glow_animation");
                        paragraphWrapper.classList.add("glow_animation");
                        clearInterval(scrollingId.current);
                    }
                } catch (error) {
                    console.error(error)
                    if (scrollingId.current) { clearInterval(scrollingId.current); }
                }

            }, 10);

        }

        tetris()

    }, [])
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `${styling}`

        document.head.appendChild(style);

    }, [styling])



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
                    <h6 className="banner-right-top" >{quotes ? quotes[0].quote : ''} <br /> {quotes ? quotes[0].author : ''}</h6>
                    <h6 className="banner-right-right" >{quotes ? quotes[1].quote : ''} <br /> {quotes ? quotes[1].author : ''} </h6>
                    <h6 className="banner-right-left-top-left" >{quotes ? quotes[2].quote : ''} <br /> {quotes ? quotes[2].author : ''}</h6>
                    <h6 className="banner-right-left-top-right" >{quotes ? quotes[3].quote : ''} <br /> {quotes ? quotes[3].author : ''}</h6>
                    <h6 className="banner-right-left-bottom-top" >{quotes ? quotes[4].quote : ''} <br /> {quotes ? quotes[4].author : ''} </h6>
                    <h6 className="banner-right-left-bottom-bottom" >{quotes ? quotes[5].quote : ''} <br /> {quotes ? quotes[5].author : ''}</h6>
                </div>
            </div>
        </section>
    )

}