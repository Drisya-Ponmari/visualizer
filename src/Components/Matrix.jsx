/**
 * @author Drisya P
 * @since 2020.11.12
 */
import React from "react";
import Block from "./Block/Block"

/**
 * Function returns the jsx element to show the dp matrix, which is represented as table component.
 * @param {obejct} props  contains the two D array of objects to be rendered
 */
export default function Matrix(props) {
    // console.log(props)
    return (
        <div>
            <table>
                <tbody>
                    {
                        props.matrix.map((numList, i) => (
                            <tr key={i}>{
                                numList.map((num, j) =>
                                    <td key={j}>
                                        <label> {((props.label) && (i === 0)) ? j : ''}</label>
                                        <Block
                                            value={num.value}
                                            role={num.role}
                                        />
                                    </td>)
                            }</tr>
                        ))
                    }</tbody>
            </table>
        </div>

    );
} 