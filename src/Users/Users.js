import React, {Component} from 'react';
import { connect } from 'react-redux';

import Wrapper from './UserModel';
import * as actionTypes from '../store/actions/actions';

class Users extends Component {
      componentDidMount() {
        console.log(this.props.user);
        this.props.onFetchUsers();
        //console.log(this.props.state.users[5].likes)
      }

    render() {
        console.log(this.props.isLoading, this.props.users, this.props);
        const users = this.props.users.map(user =>
        <Wrapper
            key={user.id}
            id={user.id} 
            userId={user.userId}
            title={user.title} 
            user={user}
            likes={user.likes}
            dislikes={user.dislikes}
            onDislikeAdded={() => this.props.onDislikeAdded(user)}
            onDislikeRemoved = {() => this.props.onDislikeRemoved(user)}
            onLikeAdded={()=>this.props.onLikeAdded(user)}
            onLikeRemoved={() => this.props.onLikeRemoved(user)} />);
        return users;                        
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        errors: null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLikeAdded: (user) => dispatch({type: actionTypes.ADD_LIKE, user}),
        onLikeRemoved: (user) => dispatch({type: actionTypes.REMOVE_LIKE, user}),
        onDislikeAdded: (user) => dispatch({type: actionTypes.ADD_DISLIKE, user}),
        onDislikeRemoved: (user) => dispatch({type: actionTypes.REMOVE_DISLIKE, user}),
        onFetchUsers: () => dispatch(actionTypes.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);