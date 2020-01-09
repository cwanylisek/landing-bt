import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = props => {

    let drawerClasses
    props.isOpen ? drawerClasses = ['side-drawer', 'open'] : drawerClasses = ['side-drawer'];

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul className="side-drawer__wrap">
                <NavLink exact={true} className="side-drawer__link" activeClassName="side-drawer__link--active side-drawer__link--active--1" to='/'><li>home</li></NavLink>
                <NavLink className="side-drawer__link" activeClassName="side-drawer__link--active side-drawer__link--active--2" to='/about'><li>about</li></NavLink>
                <NavLink className="side-drawer__link" activeClassName="side-drawer__link--active side-drawer__link--active--3" to='/contact'><li>contact</li></NavLink>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    isOpen: state.baseReducer.isOpen
})

export default connect(mapStateToProps, [])(Navbar)