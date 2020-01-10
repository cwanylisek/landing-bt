import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <p><FontAwesomeIcon icon={faCode} size="1x" /> with <FontAwesomeIcon icon={faReact} /></p>
        </footer>
    )
}