import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: true,
    isOpen: false,
    date: 'data',
    name: 'BARTOSZ TYLKOWSKI',
    text: 'FRONT-END DEVELOPER',
    about: "React enthusiast intrested in new technologies. Im experienced in most acctual frontend tools. Allways looking for opportunity in new intresting project for improve myself in developer's world. Feel free to contact me for more info!"
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