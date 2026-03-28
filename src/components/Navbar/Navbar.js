import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = props => {
    const drawerClasses = ['side-drawer'];
    if (props.isOpen) {
        drawerClasses.push('open');
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul className="side-drawer__wrap">
                <NavLink to="/" className={({ isActive }) => `side-drawer__link ${isActive ? 'side-drawer__link--active side-drawer__link--active--1' : ''}`}><li>home</li></NavLink>
                <NavLink to="/about" className={({ isActive }) => `side-drawer__link ${isActive ? 'side-drawer__link--active side-drawer__link--active--2' : ''}`}><li>about</li></NavLink>
                <NavLink to="/contact" className={({ isActive }) => `side-drawer__link ${isActive ? 'side-drawer__link--active side-drawer__link--active--3' : ''}`}><li>contact</li></NavLink>
            </ul>
        </nav>
    );
};

const mapStateToProps = state => ({
    isOpen: state.baseReducer.isOpen
});

export default connect(mapStateToProps, [])(Navbar);