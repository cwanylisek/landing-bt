import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import './Home.scss';

const Home = props => {

    return (
        <motion.div
            className="home__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <h2>{props.name}</h2>
            <h1>{props.text}</h1>
        </motion.div>
    );
};

const mapStateToProps = state => ({
    name: state.baseReducer.name,
    text: state.baseReducer.text
});

export default connect(mapStateToProps)(Home);