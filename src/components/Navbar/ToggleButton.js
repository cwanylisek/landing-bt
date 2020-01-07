import React from 'react'
import { conncect, connect } from 'react-redux'
import actions from '../../store/actions'
import './ToggleButton.scss'

const ToggleButton = props => {
    if (props.isOpen) {
        return (
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button__line toggle-button__cross--1"></div>
                <div className="toggle-button__line toggle-button__cross--2"></div>
                <div className="toggle-button__line toggle-button__cross--3"></div>
            </button>
        )
    } else {
        return (
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
            </button>
        )
    }
}

const mapStateToProps = state => ({
    isOpen: state.baseReducer.isOpen
})

const mapDispatchToProps = dispatch => ({
    click: () => dispatch(actions.open())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton)