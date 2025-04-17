import React from "react";
import "./styles/contact.css"
import useMouseParallax from "../components/useMouseParallax.js";
import Form from "../components/Form.js";
import Header from "../components/Header.js"

function Contact(){
    const backgroundStyle = useMouseParallax(0.07);
    return(
        <>
            <Header/>
            
                <div className="contact-bg" style={backgroundStyle}></div>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="primary">Get In Touch.</h2>
                        <h2 className="secondary">Need to reach out?</h2>
                        <p className="info-desc">If you're as excited about great ideas as I am, 
                            then we're already off to a good start. 
                            Let’s set up a time to connect, share our visions, 
                            and see how we can build something amazing together.
                            I’ll bring the coffee—you bring the spark.
                        </p>
                    </div>
                    <div className="details">
                        <h3>Phone</h3>
                        <p>+91 9497656794</p>
                        <h3>Email</h3>
                        <p>anoopvikram619@gmail.com</p>
                    </div>
                    <div className="form-wrapper"><Form/></div>
                    
                </div>
        </>
    )
}

export default Contact;