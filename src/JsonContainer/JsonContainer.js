import React from 'react';

export default function Container(props) {
    const styles = {
        display: 'inline-block',
        width: '31%',
        height: '20vh',
        margin: '1%',
        border: '1px solid black',
        overflow: 'auto'
    }
    return (
        <div style={styles}> 
            <p>{props.userId}</p>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
}