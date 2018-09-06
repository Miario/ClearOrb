import React, { Component } from 'react';
import ContactForm from './Form/Form';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <svg preserveAspectRatio="none" viewBox="0 0 100 101" height="75" width="100%">
                    <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
                </svg>
                <div className="container">
                    <h1>CONTACT</h1>
                    <div className="header-bar" data-aos='slide-right'></div>
                    <ContactForm />
                </div>
            </section>
        )        
    }

}

export default Contact;