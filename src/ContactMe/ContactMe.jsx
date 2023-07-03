import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form" id='contact'>
            <h2 className="contact-form__title">CONTACT</h2>
            <form onSubmit={handleSubmit}>

                <div className='first_line'>
                    <div className="contact-form__group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="contact-form__group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                </div>


                <div className="contact-form__group_textarea">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    ></textarea>
                </div>
                <div className='button'>
                <button className='btn btn--outline' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
