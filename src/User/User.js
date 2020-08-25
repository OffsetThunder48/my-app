import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import './User.css';
import { fetchUser} from '../store/actions/actions';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 100vh;
`;

class User extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.onFetchUser(this.props.location.state);
    }
    render() {
        return (
            <StyledDiv>
                    <table>
                        <thead>
                            <tr>
                                <th className="col1">User ID</th>
                                <th className="col1">ID</th>
                                <th className="col2">Title</th>
                                <th className="col3">Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col1">{this.props.user.userId}</td>
                                <td className="col1">{this.props.user.id}</td>
                                <td className="col2">{this.props.user.title}</td>
                                <td className="col3">{this.props.user.body}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="back" to={'../'}>Back</Link>
            </StyledDiv>
        )
    }
};

const mapStateToProps = state => {
    return {
        users: state.users,
        user: state.user,
        errors: state.errors,
        isLoading: state.is
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);