import React from 'react';
// Import GitHub and LinkedIn icons from the react-icons library
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/contactPage.css';

export default function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Please contact me through the links below:</p>
            <div className="contact-links">
                <a href="https://github.com/gysagsohn" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="contact-icon" />
                    GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/gysohn/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="contact-icon" />
                    LinkedIn Profile
                </a>
            </div>
            <p className="note">
                Note: This project isn't finished. It was part of my Term 3 project for Coder Academy.
            </p>
        </div>
    );
}
