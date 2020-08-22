import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import './User.css';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40vw;
    height: auto;
`;

class User extends Component {
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
                                <td className="col1">{this.props.location.state.userId}</td>
                                <td className="col1">{this.props.location.state.id}</td>
                                <td className="col2">{this.props.location.state.title}</td>
                                <td className="col3">{this.props.location.state.body}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="back" to="/users">Back</Link>
            </StyledDiv>
        )
    }
};

export default User;