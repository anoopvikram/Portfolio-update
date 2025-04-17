import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import "./styles/Form.css"

function Form(){
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));

    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_e71fpif',
            'template_g74yadi',
            e.target,
            'AEU0rj0bZEXWiCcKn'  
        )
        .then((result) => {
            console.log('Email sent!', result.text);
            alert('Message sent successfully!');
          }, (error) => {
            console.log('Failed to send email:', error.text);
            alert('Failed to send message.');
          });
        setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
        })

    };

    return(
        <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" value= {formData.name} onChange={handleChange} required></input>
                <input type="text" name="phone" placeholder="Enter your phone number" value= {formData.phone} onChange={handleChange}></input>
                <input type="text" name="email" placeholder="Enter your email" value= {formData.email} onChange={handleChange} required></input>
                <textarea type="text" name="message" placeholder="Message" rows={4} value= {formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
};

export default Form;