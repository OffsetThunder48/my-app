import axios from 'axios';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const ADD_DISLIKE = 'ADD_DISLIKE';
export const REMOVE_DISLIKE = 'REMOVE_DISLIKE';
export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        user: user
    }
}

export const addLikeToUser = (user) => {
    console.log(user);
    return {
        type: ADD_LIKE,
        user: user
    }
}

export const fetchUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          res => {
            res.data.map(user => ({
            userId: `${user.userId}`,
            id: `${user.id}`,
            title: `${user.title}`,
            body: `${user.body}`,
            }));
            res.data.forEach(user => {
                user.likes = 500;
                user.dislikes = 100;
            })
            console.log(res.data);
            dispatch(setUsers(res.data))
        }
    ).catch(err => console.log(err)) 
    }
}

export const fetchUser = (id) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(
            res => {
                console.log(res.data);
                dispatch(setUser(res.data))
            }
        ).catch(err => console.log(err))
    }
}
