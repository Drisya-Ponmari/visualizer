import React from 'react';
import Row from "./Row"
import "../../Utils/Label.css"
function Box(props) {
    const weight = props.weightArray;
    const value = props.valueArray;
    const color = props.color;
    const item = props.item;
    if (color[color.length - 1] !== "white") {
        color.push("white");

    }
    const capacity = props.capacity;

    //calculate height array
    let filledHeight = 0;
    let filledWeight = 0;
    let filledValue = 0;
    let heightArray = [];
    let index = [];
    let n = weight.length + 1;
    let pbyw = 0;
    for (let i = 0; i < n - 1; i++) {
        pbyw += (((value[i] / weight[i]).toFixed(2)) * 60);
    }
    const totalHeight = 10;
    pbyw *= 40;
    console.log("pb", pbyw)
    for (let i = 0; i < n - 1; i++) {

        //       let wt = (totalHeight / capacity) * weight[i];
        //    let wt = (totalHeight / pbyw) * (value[i] / weight[i]);
        let numerator = (value[i] / weight[i]).toFixed(2) * 60;
        console.log(numerator);
        let wt = totalHeight * (numerator * 1000 / pbyw)

        filledHeight += wt;
        filledValue += value[i];
        filledWeight += weight[i];
        heightArray.push(wt);
        index.push(i);
    }
    if (capacity !== filledWeight) {
        index.push(n - 1);
        heightArray.push(Math.max(totalHeight - filledHeight, 0));
    }
    console.log(heightArray);
    return (
        <div >
            <br />
            <label className="label heading">Knapsack</label><br />
            <div className="label subheading ">
                capacity :{capacity}
                <br />
                totalweight = {filledWeight}
                <br />
                totalProfit = {filledValue}
            </div>
            <br />
            <div style={{ marginLeft: '20px' }}>
                <table style={{ width: '300px', borderCollapse: 'collapse', border: '1px solid black' }}>
                    <tbody>
                        {
                            index.map(
                                (ind, i) => (<Row height={heightArray[ind]} color={color[ind]} value={value[ind]} weight={weight[ind]} i={item[ind]} />)
                            )
                        }</tbody>
                </table>
            </div>
        </div>
    )
}

export default Box;