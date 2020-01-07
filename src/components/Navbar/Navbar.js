import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = props => {

    let drawerClasses
    props.isOpen ? drawerClasses = ['side-drawer', 'open'] : drawerClasses = ['side-drawer'];

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul className="side-drawer__wrap">
                <Link className="side-drawer__link" to='/'><li>home</li></Link>
                <Link className="side-drawer__link" to='/about'><li>about</li></Link>
                <Link className="side-drawer__link" to='/contact'><li>contact</li></Link>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    isOpen: state.baseReducer.isOpen
})

export default connect(mapStateToProps, [])(Navbar)