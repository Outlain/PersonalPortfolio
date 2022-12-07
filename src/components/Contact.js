import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.jpeg"


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, SetStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://crypto-app-nyj5.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            SetStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            SetStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        PlaceHolder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        PlaceHolder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        PlaceHolder="Email"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        PlaceHolder="Phone Number"
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <textarea row='6' vaue={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.succes === false ? 'danger' : "sucess"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}