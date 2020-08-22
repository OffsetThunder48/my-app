import axios from 'axios';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const ADD_DISLIKE = 'ADD_DISLIKE';
export const REMOVE_DISLIKE = 'REMOVE_DISLIKE';
export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const fetchUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          res => {
              dispatch(setUsers(res.data));
          }
        ).catch(
           err => console.log(err) 
        )
    };
}
