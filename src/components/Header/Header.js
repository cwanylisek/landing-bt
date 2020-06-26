import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import moment from 'moment';
import actions from '../../store/actions';
import './Header.scss';

const Header = props => {

    useEffect(() => {
        let today = moment().format('DD MMM YYYY');
        props.dispatch(actions.date(today));
    });

    let headerClass = ['header__tag'];

    const location = useLocation();

    if (location.pathname === '/about') {
        headerClass = ['header__tag', 'header__tag--yellow']
    } else if (location.pathname === '/contact') {
        headerClass = ['header__tag', 'header__tag--purple']
    };

    return (
        <div className="header__container">
            <motion.div
                className="header__date"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: 'tween' }}
            >
                <h5>{props.date}</h5>
            </motion.div>
            <motion.div
                className={headerClass.join(' ')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h1>BT</h1>
            </motion.div>
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