/**
 * @author Drisya ponamri
 */
import React from 'react';
import './Block.css';
/**
 * @component 
 * @description functional component  return a block in the matrix , with appropriate color and 
 * value in it
 * @param {object} props contains the value and state (updated/visited) of the block
 * @returns JSX code to show colored block in matrix.
 * @see Matrix
 */
function Block(props) {
    /**
     * Select the color of the block , by selecting the corresponding role 
     * from the prop
     */
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

export default Block;