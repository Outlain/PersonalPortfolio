import { useState } from "react";
// import { Container, Col, div } from "react-bootstrap";
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
            <div className="connect-left">
                <img src={contactImg} alt="Contact Me" />
            </div>
            <div className="connect-right">
                <h2>Get in touch</h2>
                <form onSubmit={handleSubmit}>
                    <span>
                        <input
                            type="text"
                            value={formDetails.firstName}
                            PlaceHolder="First Name"
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                    </span>
                    <span>
                        <input
                            type="text"
                            value={formDetails.lastName}
                            PlaceHolder="Last Name"
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                    </span>
                    <span>
                        <input
                            type="email"
                            value={formDetails.email}
                            PlaceHolder="Email"
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                    </span>
                    <span>
                        <input
                            type="text"
                            value={formDetails.phone}
                            PlaceHolder="Company Name (optional)"
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                    </span>
                    <span className="connect-right-message">
                        <textarea vaue={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    </span>
                    <button type='submit'>
                        <span>{buttonText}</span>
                    </button>
                    {
                        status.message &&
                        <span className="connect-right-result">
                            <p className={status.succes === false ? 'There was an error' : "sucess"}>{status.message}</p>
                        </span>
                    }
                </form>
            </div>
        </section>
    )

}