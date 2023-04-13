import React from 'react';

export function NextArrow(props) {
    return (
        <>
            <div 
                className = {props.className}
                style = {{ ...props.style }}
                onClick = {props.onClick}
            />
        </>
    )
} 

export function PrevArrow(props) {
    return (
        <>
            <div 
                className = {props.className}
                style = {{ ...props.style }}
                onClick = {props.onClick}
            />
        </>
    );
}

// This  is how you write styless in React jsx files : 
// Style = {{color:"red", padding:"10px", backgroundColor:"red"}}