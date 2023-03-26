import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle, faViber } from '@fortawesome/free-brands-svg-icons'

import "./Contact.css"

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm(
            'service_hrri1pe',
            'template_h2tmy3y',
            refForm.current,
            '7QR5INasuVNWWCFdO'
        )
        .then( () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send message. Please try again.')
        })
    }

    return (
            <div className="contact-page">
                <div className="left">
                    <div className="contact-text">
                        <h2 className="display-font bold primary">Let's get in touch!</h2>
                        <p>I'm interested in full-time position such as Junior/ Associate Software Engineer or Software Developer. Please don’t hesitate to contact me and let’s put your ideas into code!</p>
                </div>
                <ul className="social-container">
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/galvez-mcj">
                        <FontAwesomeIcon icon={faGithub} color="#000" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/galvez-mcj/">
                        <FontAwesomeIcon icon={faLinkedin} color="#0052cc" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="viber://chat?number=639164729179">
                        <FontAwesomeIcon icon={faViber} color="#000" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="mailto://galvez.mcj@gmail.com/">
                        <FontAwesomeIcon icon={faGoogle} color="#0052cc" size="xl"/>
                    </a>
                </li>
                </ul>
            </div>
            <div className="right">
            <form ref={refForm} onSubmit={sendEmail}>
                <h3 className="display-font">Send me a message</h3>
                <input 
                    className="input-text"
                    type="text"
                    name="name"
                    placeholder="Name/Company"
                    required/>
                <input
                    className="input-text"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required/>
                <input 
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required/>
                <textarea
                    className="input-message"
                    name="message"
                    placeholder="Type down your job offer!"
                    required>
                </textarea>
                <button>Send Message!</button>
            </form>
            </div>
        </div>
    )
}

export default Contact