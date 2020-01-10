import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Contact.scss'

const Contact = props => {
    return (
        <div className="contact__container">
            <a href="https://github.com/cwanylisek" rel="noopener noreferrer" target='_blank'>
                <FontAwesomeIcon className="contact__github" icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/bartosz-tylkowski-429862146/" rel="noopener noreferrer" target='_blank'>
                <FontAwesomeIcon className="contact__linkedin" icon={faLinkedin} size="3x" />
            </a>
        </div>
    )
}

export default Contact