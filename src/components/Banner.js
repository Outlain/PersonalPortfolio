import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
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
        if (quotes) { console.log(quotes[0].text) }

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
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello, I'm Carlos Amado Roller `} <br /><br /><span className="wrap">{text}</span></h1>
                        <p>I'm a full Stack web Developer passionate about creating the projects of the future</p>
                    </Col>
                    <Col className="what" xs={12} md={6} xl={5}>
                        <h5 className="creation1">{quotes ? quotes[0].author : ''} <br /> <p>{quotes ? quotes[0].text : ''}</p> </h5>
                        <br />
                        <br />
                        <br />
                        <h5 className="creation">{quotes ? quotes[1].author : ''} <br /> <p>{quotes ? quotes[1].text : ''}</p> </h5>

                    </Col>
                </Row>
            </Container>
        </section>
    )

}