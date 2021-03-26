import React from 'react';
import Row from "./Row"
import "../../Utils/Label.css"
function Main(props) {
    const weight = props.weightArray;
    const value = props.valueArray;
    let color = props.color;
    const capacity = props.capacity;

    //calculate height array
    const totalHeight = 400;
    let filledHeight = 0;
    let filledWeight = 0;
    let filledValue = 0;
    let heightArray = [];
    let index = [];
    let n = weight.length + 1;
    for (let i = 0; i < n - 1; i++) {

        let wt = (totalHeight / capacity) * weight[i];
        filledHeight += wt;
        filledValue += value[i];
        filledWeight += weight[i];
        heightArray.push(wt);
        index.push(i);
    }
    index.push(n - 1);
    heightArray.push(Math.max(totalHeight - filledHeight, 0));
    color.push("white");
    return (
        <div >
            <br />
            <label className="label heading">Knapsack</label><br />
            <div className="label subheading ">
                capacity :{capacity}
                <br />
                totalweight = {filledWeight}
                <br />
                totalValue = {filledValue}
            </div>
            <br />
            <div style={{ marginLeft: '20px' }}>
                <table style={{ width: '300px', borderCollapse: 'collapse', border: '1px solid black' }}>
                    <tbody>
                        {
                            index.map(
                                (ind, i) => (<Row height={heightArray[ind]} color={color[ind]} value={value[ind]} weight={weight[ind]} i={props.item[ind]} />)
                            )
                        }</tbody>
                </table>
            </div>
        </div>
    )
}

export default Main;