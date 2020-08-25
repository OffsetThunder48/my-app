import * as actionTypes from './actions/actions';

const intitialState = {
    users: [],
    user: {},
    isLoading: true,
    errors : null
};

const reducer = (state = intitialState, payload) => {
    console.log(payload.users);
    switch(payload.type) {
        case actionTypes.SET_USERS : 
        return {
            ...state,
            users: payload.users,
            isLoading: false,
        }
        case actionTypes.SET_USER: return {
            ...state,
            ...state.users,
            ...state.isLoading = false,
            user: payload.user,
            errors: null
        }
        case actionTypes.FETCH_USER: return {
            ...state,
            ...state.users,
            isLoading: false
        }
        case actionTypes.ADD_LIKE : return Object.assign({}, state, {
            users: state.users.map(
                (user) =>{
                    if(user.id === payload.user.id) {
                        return Object.assign({}, user, {
                            likes: payload.user.likes+1
                        })
                    }
                    return user
                }
            )
        });
        case actionTypes.REMOVE_LIKE : return Object.assign({}, state, {
            users: state.users.map(
                (user) =>{
                    if(user.id === payload.user.id) {
                        return Object.assign({}, user, {
                            likes: payload.user.likes-1
                        })
                    }
                    return user
                }
            )
        });
        case actionTypes.ADD_DISLIKE: return Object.assign({}, state, {
            users: state.users.map(
                (user) =>{
                    if(user.id === payload.user.id) {
                        return Object.assign({}, user, {
                            dislikes: payload.user.dislikes+1
                        })
                    }
                    return user
                }
            )
        });
        case actionTypes.REMOVE_DISLIKE: return Object.assign({}, state, {
            users: state.users.map(
                (user) =>{
                    if(user.id === payload.user.id) {
                        return Object.assign({}, user, {
                            dislikes: payload.user.dislikes-1
                        })
                    }
                    return user
                }
            )
        });
        default: return state;
}
};

export default reducer;