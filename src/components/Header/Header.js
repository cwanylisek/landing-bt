import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import actions from '../../store/actions'
import './Header.scss'

const Header = props => {

    useEffect(() => {
        let today = moment().format('DD MMM YYYY');
        console.log(today, 'data')
        props.dispatch(actions.date(today))
    })

    let headerClass = ['header__tag']
    const location = useLocation();
    console.log(location.pathname)
    if (location.pathname == '/about') {
        headerClass = ['header__tag', 'header__tag--yellow']
    } else if (location.pathname == '/contact') {
        headerClass = ['header__tag', 'header__tag--purple']
    }

    return (
        <div className="header__container">
            <div className="header__date">
                <h5>{props.date}</h5>
            </div>
            <div className={headerClass.join(' ')}>
                <h1>BT</h1>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    date: state.baseReducer.date
})

// const mapDispatchToProps = dispatch => ({
//     date: () => dispatch(actions.date(today))
// })

export default connect(mapStateToProps)(Header)