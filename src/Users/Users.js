import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

import Wrapper from './UserModel';
import * as actionTypes from '../store/actions/actions';

const style = {
    height: 'auto',
    width: 'auto'
}

const divStyle = {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center'
}

class Users extends Component {
      componentDidMount() {
        this.props.onFetchUsers();
        console.log(this.props.likes, this.props.dislikes)
      }

    render() {
        const users = this.props.users.map(
            user =>
            <section> 
                <Link style={style} key={user.id} to={{pathname: '/users/' + this.props.id, state: user}}>
                    <Wrapper id={user.id} userId={user.userId} title={user.title} />
                </Link>
                {this.props.likes}
                {this.props.dislikes}
                <button styles={divStyle} onClick={this.props.onLikeAdded}>Add Like</button>
                <button styles={divStyle} onClick={this.props.onLikeRemoved}>Remove Like</button>
                <button styles={divStyle} onClick={this.props.onDislikeAdded}>Add Dislike</button>
                <button styles={divStyle} onClick={this.props.onDislikeRemoved}>Remove Dislike</button>
            </section>
        );
        return (
            users
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        likes: state.likes,
        dislikes: state.dislikes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLikeAdded: (likes) => dispatch({type: actionTypes.ADD_LIKE, likes}),
        onLikeRemoved: (likes) => dispatch({type: actionTypes.REMOVE_LIKE, likes}),
        onDislikeAdded: (dislike) => dispatch({type: actionTypes.ADD_DISLIKE, dislike}),
        onDislikeRemoved: (dislike) => dispatch({type: actionTypes.REMOVE_DISLIKE, dislike}),
        onFetchUsers: () => dispatch(actionTypes.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);