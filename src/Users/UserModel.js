import React from 'react';
import styled from 'styled-components';

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
const wrapper = (props) => {
    return (
            <StyledDiv> 
                <StyledP>{props.userId}</StyledP>
                <StyledP>{props.id}</StyledP>
                <StyledP>{props.title}</StyledP>
                <StyledP>Click for more Details</StyledP>
            </StyledDiv>   
    )
}

export default wrapper;