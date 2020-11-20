/**
 * @author Drisya ponamri
 */
import React from 'react';
import './Block.css';
/**
 * function return a block in the matrix , with appropriate color and 
 * value in it
 * @param {string} props 
 */
export default function Block(props) {
    /**
     * Select the color of the block , by selecting the corresponding class 
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