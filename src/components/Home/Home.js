import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './Home.scss'

const Home = props => {
    useEffect(() => {
        console.log('test')
    })

    return (
        <div className="home__container">
            <h2>{props.name}</h2>
            <h1>{props.text}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    name: state.baseReducer.name,
    text: state.baseReducer.text
})

export default connect(mapStateToProps)(Home)