import React from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import './About.scss'

const About = props => {
    return (
        <motion.div 
            className="about__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <p className="about__text">{props.about}</p>
        </motion.div>
    )
}

const mapStateToProps = state => ({
    about: state.baseReducer.about
})

export default connect(mapStateToProps)(About)