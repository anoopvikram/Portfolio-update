import React from "react";
import "./styles/contact.css"
import useMouseParallax from "../components/useMouseParallax.js";
import Form from "../components/Form.js";

function Contact(){
    const backgroundStyle = useMouseParallax(0.04);
    return(
        <div className="contact-container">
            <div className="contact-bg" style={backgroundStyle}></div>
            <div className="contact-info">
                <h2>Get In Touch.</h2>
                <p>If you're as excited about great ideas as I am, 
                    then we're already off to a good start. 
                    Let’s set up a time to connect, share our visions, 
                    and see how we can build something amazing together.
                     I’ll bring the coffee—you bring the spark.</p>
                <h3>Phone</h3>
                <p>+91 9497656794</p>
                <h3>Email</h3>
                <p>anoopvikram619@gmail.com</p>
            </div>
            <Form/>
        </div>
    )
}

export default Contact;