import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: true,
    isOpen: false,
    date: 'data',
    name: 'BARTOSZ TYLKOWSKI',
    text: 'FRONT-END DEVELOPER',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic quis ipsa perferendis, ipsam obcaecati harum rem minus eius libero optio reiciendis, aut esse modi nobis, dignissimos molestiae doloremque! Eum.'
}

const baseReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.LOADING:
            return {
                ...state,
                isLoading: false
            }
        case types.OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case types.DATE:
            return {
                ...state,
                date: action.addDate
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    baseReducer
})

export default rootReducer;