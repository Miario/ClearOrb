import React, { Component } from 'react';
import ContactForm from './Form/Form';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <h1>CONTACT</h1>
                    <div className="header-bar"></div>
                    <ContactForm />
                </div>
            </section>
        )        
    }

}

export default Contact;