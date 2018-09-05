import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import './Form.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            successMsg: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      // Change state of input field so text is updated while typing
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            message: ''
        })
        
        const data = {
            'form_name': this.state.name,
            'form_email': this.state.email,
            'form_msg': this.state.message
        };

        axios({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'mailer.php',
            data: qs.stringify(data)
        })
        .then(() => {
            this.setState({
                successMsg: <div>Your message has been sent!</div>
            })
        })
        .catch(() => {
            this.setState({
                successMsg: <div>There was a problem with sending the request. Please reach me at clearorbi@gmail.com</div>
            })
        });
    }

    render() {
        const { name, email, message, successMsg } = this.state;
        return (
            <form id="contactForm"  onSubmit={this.handleSubmit} >
                <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} 
                    required 
                />
                <input 
                    placeholder="Email" 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} 
                    required 
                />
                <textarea 
                    placeholder="Your Message" 
                    type="text" 
                    name="message" 
                    value={message} 
                    onChange={this.handleChange}>
                </textarea>
                {successMsg}
                <input 
                    className="button-submit" 
                    type="submit" 
                    id="submit" 
                    value="Submit" 
                />
            </form>
        )        
    }

}

export default ContactForm;