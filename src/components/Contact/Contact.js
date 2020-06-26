import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
    return (
        <motion.div 
            className="contact__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <a href="https://github.com/cwanylisek" rel="noopener noreferrer" target='_blank'>
                <FontAwesomeIcon className="contact__github" icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/bartosz-tylkowski-429862146/" rel="noopener noreferrer" target='_blank'>
                <FontAwesomeIcon className="contact__linkedin" icon={faLinkedin} size="3x" />
            </a>
        </motion.div>
    )
}

export default Contact;