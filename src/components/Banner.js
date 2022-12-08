import { useEffect, useState } from "react";
import { Container, div, Col } from "react-bootstrap";
// import header from "../assets/img/header-img.svg";
import axios from 'axios';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Developer", "Web Designer", "UX/UI Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 1000;
    const [quotes, SetQuotes] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-app-nyj5.onrender.com/quotes',
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            SetQuotes(response.data)

        }).catch(function (error) {
            console.error(error);
        });
        console.log('once')
        if (quotes) { console.log(quotes) }

    }, [])
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

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
                    <h4>I'm a full Stack web Developer passionate about creating the projects of the future</h4>
                </div>
                <div className="banner-right">
                    <h6 className="banner-right-top creation1">{quotes ? quotes[0] : ''}  </h6>
                    <h6 className="banner-right-right creation">{quotes ? quotes[1] : ''}  </h6>
                    <h6 className="banner-right-left-top-left creation">{quotes ? quotes[1] : ''}  </h6>
                    <h6 className="banner-right-left-top-right creation">{quotes ? quotes[1] : ''}  </h6>
                    <h6 className="banner-right-left-bottom-top creation1">{quotes ? quotes[1] : ''}  </h6>
                    <h6 className="banner-right-left-bottom-bottom creation1">{quotes ? quotes[1] : ''}  </h6>
                </div>
            </div>
        </section>
    )

}