import React, { Component } from 'react';

import './Block.css';
function Block(props) {



    const extraClassName = props.role === "stay"
        ? 'block-base'
        : props.role === "visit"
            ? 'block-visit'
            : props.role === "update"
                ? 'block-update'
                : 'block-base'

    return (<div className={extraClassName} >
        {props.value}
    </div>);

}

export default Block