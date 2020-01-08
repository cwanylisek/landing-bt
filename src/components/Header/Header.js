import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import actions from '../../store/actions'
import './Header.scss'

const Header = props => {

    useEffect(() => {
        let today = moment().format('DD MMM YYYY');
        console.log(today, 'data')
        props.dispatch(actions.date(today))
    })

    return (
        <div className="header__container">
            <div className="header__date">
                <h5>{props.date}</h5>
            </div>
            <div className="header__tag">
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