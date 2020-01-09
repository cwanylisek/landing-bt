import React from 'react'
import { connect } from 'react-redux'
import './About.scss'

const About = props => {
    return (
        <div className="about__container">
            <p className="about__text">{props.about}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    about: state.baseReducer.about
})

export default connect(mapStateToProps)(About)