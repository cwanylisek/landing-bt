import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: true,
    isOpen: false,
    test: '1'
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
        default:
            return state
    }
}

const rootReducer = combineReducers({
    baseReducer
})

export default rootReducer;