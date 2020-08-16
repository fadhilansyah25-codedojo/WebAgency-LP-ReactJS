import React from 'react';
import propTypes from 'prop-types';


export default function Button(props) {
    const className = ['button'];
    if (props.isPrimary) 
        className.push("button-primary");
    if (props.isWideMobile) 
        className.push("button-wide-mobile");
    if (props.isSmall) 
        className.push("button-sm");    
    return <div className={className.join(" ")}>{props.children}</div>;
}

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWideMobile: propTypes.bool,
    isSmall: propTypes.bool
}
