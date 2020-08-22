import * as actionTypes from './actions/actions';

const intitialState = {
    users: [],
    likes: 500,
    dislikes: 100
}

const reducer = (state = intitialState, payload) => {
    console.log(payload.type, payload.likes, payload.dislike);
    switch(payload.type) {
        case actionTypes.SET_USERS : return {
            ...state,
            users: payload.users
        } 
        case actionTypes.ADD_LIKE : return {
            ...state,
            likes: state.likes+1
        };
        case actionTypes.REMOVE_LIKE : return {
            ...state,
            likes: state.likes-1
        };
        case actionTypes.ADD_DISLIKE: return {
            ...state,
            dislikes: state.dislikes+1
        };
        case actionTypes.REMOVE_DISLIKE: return {
            ...state,
            dislikes: state.dislikes-1
        };
        default: return state;
    }
};

export default reducer;