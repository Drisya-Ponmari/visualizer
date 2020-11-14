/**
 * @author Drisya P
 * @since 2020.11.12
 */

import React, { Component } from "react";
import Matrix from "../../Components/Matrix";
import IntegralKnapsack from "../Algorithms/IntegralKnapsack";
import Problem from "../../Problems/IntegralKnapSack"
import Control from "../../Components/Control/Control"

export default class IntegralKnapsackVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matrix: intialMatrix([], props.n, props.W),
            weight: intialMatrix(props.w, 0, props.n - 1),
            value: intialMatrix(props.v, 0, props.n - 1),
            speed: props.speed
        }

        console.log(this.state.weight)
    }

    /**
    * function calls the Integral knapsack algorithm and return the array of objects
    * which has all the history about the updation of each cell in the matrix.
    * And then calls the function that animate the algorithm.
    */
    visualize() {

        let temp = this.state.matrix;
        const visited = IntegralKnapsack(this.props.n, this.props.W, this.props.w, this.props.v);
        console.log("result from integral Knapsack algorithm" + visited);
        this.animate(visited)
    }

    animate(visited) {

        for (let i = 0; i <= visited.length; i++) {

            let temp = this.state.matrix;
            let vtemp = this.state.value;
            /**
             * End condition. Highlights the bottom cell of the matrix as answeprevcell.
             */
            if (i === visited.length) {
                setTimeout(() => {
                    if (i !== 0) {
                        const prevcell = visited[i - 1];
                        if (prevcell.visit.length !== 0)
                            temp[prevcell.visit[0]][prevcell.visit[1]].role = "stay";
                        if (prevcell.vindex != null)
                            vtemp[0][prevcell.vindex].role = "stay";
                        temp[prevcell.update[0]][prevcell.update[1]].role = "stay";
                        this.setState({ matrix: temp, value: vtemp });
                    }
                }, this.props.speed * i);
                return;
            }

            /**
             * updating the state matrix role , according to the block from the visited array.
             * And also revert the previous assigning of the block role.
             */
            const cell = visited[i];
            console.log(cell);
            setTimeout(() => {
                if (cell.visit.length !== 0)
                    temp[cell.visit[0]][cell.visit[1]].role = "visit";
                if (cell.vindex != null)
                    vtemp[0][cell.vindex].role = "visit";
                temp[cell.update[0]][cell.update[1]].value = cell.value;
                temp[cell.update[0]][cell.update[1]].role = "update";
                this.setState({ matrix: temp, value: vtemp });
                if (i !== 0) {
                    const prevcell = visited[i - 1];
                    if (prevcell.visit.length !== 0)
                        temp[prevcell.visit[0]][prevcell.visit[1]].role = "stay";
                    if (prevcell.vindex != null)
                        vtemp[0][prevcell.vindex].role = "stay";
                    temp[prevcell.update[0]][prevcell.update[1]].role = "stay";
                    this.setState({ matrix: temp, value: vtemp });
                }
            }, this.props.speed * i);

        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.visualize()}> Visualize Integral KnapSack</button>
                <div>
                    {Problem()}
                </div>
                <Matrix
                    matrix={this.state.matrix}
                    label={true}
                />
                <Matrix
                    matrix={this.state.weight}
                    label={false}
                />
                <Matrix
                    matrix={this.state.value}
                    label={false}
                />
                <Control />
            </div>
        )
    }
}


const initialArray = (w, n) => {
    let array = new Array(1);
    for (let row = 0; row <= 0; row++) {
        array[row] = []
    }

    for (let row = 0; row <= 0; row++) {

        for (let col = 0; col < n; col++) {
            array[row][col] = block(w[col]);
        }
    };
    return array;
}
const intialMatrix = (val, Row, Col) => {

    let matrix = new Array(Row + 1);
    for (let row = 0; row <= Row; row++)
        matrix[row] = [];

    for (let row = 0; row <= Row; row++) {

        for (let col = 0; col <= Col; col++) {
            matrix[row][col] = val === [] ? block(null) : block(val[col]);
        }
    };

    return matrix;
}

const block = (value) => {

    return {
        value: value,
        role: "stay"
    };
};

