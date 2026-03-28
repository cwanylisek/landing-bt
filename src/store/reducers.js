import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: true,
    isOpen: false,
    date: 'data',
    name: 'BARTOSZ TYLKOWSKI',
    text: 'FRONT-END DEVELOPER',
    about: "React enthusiast intrested in new technologies. I'm experienced in most actual frontend tools. Always looking for opportunity in new interesting project to improve myself in developer's world. Feel free to contact me for more info!",
};

const baseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                isLoading: false,
            };
        case types.OPEN:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case types.DATE:
            return {
                ...state,
                date: action.addDate,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    baseReducer,
});

export default rootReducer;