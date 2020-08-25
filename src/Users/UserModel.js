import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const StyledP = styled.p`
    color: white;
    text-align: center;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: white;
    padding: 5px;
`;

const StyledDiv = styled.div`
    display: inline-block;
    width: 31%;
    height: auto;
    margin: 1%;
    overflow: auto;
    background-color: teal;
`;

const StyledDiv2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    margin: 10px auto;
    background-color: white;
    font-weight: bolder;
    fonst-size: x-large;
    color: teal;
    width: 20%;
    padding: 5px;
    outline: 0;
    border: 0px;
`;

const styles = {
    textDecoration: 'none',
    color: 'white'
}

const wrapper = (props) => {
    return <StyledDiv>
                <StyledP>{props.userId}</StyledP>
                <StyledP>{props.id}</StyledP>
                <StyledP>{props.title}</StyledP>
                <StyledP><Link style={styles} key={props.id} to={{pathname: '/users/' + props.id, state: props.id}}>Click for more Details</Link></StyledP>
                <StyledP>{props.likes} | {props.dislikes}</StyledP>
                <StyledDiv2>
                    <StyledButton onClick={props.onLikeAdded}>Add Like</StyledButton>
                    <StyledButton onClick={props.onLikeRemoved}>Remove Like</StyledButton>
                    <StyledButton onClick={props.onDislikeAdded}>Add Dislike</StyledButton>
                    <StyledButton onClick={props.onDislikeRemoved}>Remove Dislike</StyledButton>
                </StyledDiv2>
            </StyledDiv>
}

export default wrapper;