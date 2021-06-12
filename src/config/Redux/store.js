import {createStore} from 'redux';

const initialState = {
    dataSkill: [],
    dataProject: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_DATA_SKILL') {
        return {
            ...state,
            dataSkill: action.payload
        }
    }
    if (action.type === 'SET_DATA_PROJECT') {
        return {
            ...state,
            dataProject: action.payload
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;