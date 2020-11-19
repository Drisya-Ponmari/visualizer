import React from 'react';
import './Block.css';
import "../../Utils/Font.css"
function Block(props) {



    const extraClassName = props.role === "stay"
        ? 'block base'
        : props.role === "visit"
            ? 'block visit'
            : props.role === "update"
                ? 'block update'
                : props.role === "visit-min"
                    ? 'block visit-min'
                    : 'block base'

    return (<div className={extraClassName + " block-value"}>
        {props.value}
    </div>);

}

export default Block