/**
 * @author Drisya P
 * @since 2020.11.12
 */

import React, { Component } from "react";
import Matrix from "../../Components/Matrix";
import IntegralKnapsack from "../Algorithms/IntegralKnapsack";
import Problem from "../../Problems/IntegralKnapSackProblem"
import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"


export default class IntegralKnapsackVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matrix: intialMatrix([], props.data.numberOfItems, props.data.capacity),
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
        }

    }
    /**
     * states are updated again when new props arrives
     */
    componentWillReceiveProps(props) {
        this.setState({
            matrix: intialMatrix([], props.data.numberOfItems, props.data.capacity),
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            speed: props.speed,
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null
        })

    }

    /**
     * pause button
     */
    handlePause() {
        console.log("paused")
        this.setState(prevState => ({
            isRunning: false
        }))
    }

    /**
     * play button
     */
    handlePlay() {
        console.log("played")
        this.setState(prevState => ({
            isRunning: true
        }))
    }

    /**
    * function calls the Integral knapsack algorithm and return the array of objects
    * which has all the history about the updation of each cell in the matrix.
    * And then calls the function that animate the algorithm.
    */
    visualize() {

        let temp = this.state.matrix;
        const allSteps = IntegralKnapsack(this.props.data.numberOfItems, this.props.data.capacity, this.props.data.weights, this.props.data.values);
        this.visited = allSteps[0];
        this.Id = allSteps[1];
        // console.log("result from integral Knapsack algorithm" + visited);
        this.handlePlay();
    }


    /**Function to check rows and colun index of two cell a and be not the same*/
    isNotEqual(a, b) {
        if (a === null || b === null)
            return true;
        if (a[1] === b[1] && a[0] === b[0])
            return false;
        return true;
    }

    /**
     * Funtion to color the updating , visiting cells
     */
    doColor(cell) {

        let temp = this.state.matrix;
        let vtemp = this.state.value;
        let equation = null;
        if (cell.vindex !== null)
            vtemp[0][cell.vindex[0]].role = cell.vindex[1];
        if (cell.firstVisit !== null)
            temp[cell.firstVisit[0]][cell.firstVisit[1]].role = "visit";
        if (cell.secondVisit !== null)
            temp[cell.secondVisit[0]][cell.secondVisit[1]].role = "visit-min";

        temp[cell.update[0]][cell.update[1]].value = cell.value;
        temp[cell.update[0]][cell.update[1]].role = "update";

        return [temp, vtemp]
    }

    /**
     *Function to remove the color previusly updated cell
     */
    deColor(cell, prevcell, currentBlock) {

        let temp = currentBlock[0]
        let vtemp = currentBlock[1]

        if (prevcell.firstVisit !== null && this.isNotEqual(cell.firstVisit, prevcell.firstVisit))
            temp[prevcell.firstVisit[0]][prevcell.firstVisit[1]].role = "stay";
        if (prevcell.secondVisit !== null && this.isNotEqual(cell.secondVisit, prevcell.secondVisit))
            temp[prevcell.secondVisit[0]][prevcell.secondVisit[1]].role = "stay";
        if (this.isNotEqual(cell.update, prevcell.update))
            temp[prevcell.update[0]][prevcell.update[1]].role = "stay";

        if (prevcell.vindex !== null && this.isNotEqual(cell.vindex, prevcell.vindex))
            vtemp[0][prevcell.vindex[0]].role = "stay";


        return [temp, vtemp];
    }
    /**
     * Animation stops when we showed all the updated cell or after clicking pause button
     */
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    componentWillMount() {
        /**
        * updating the state matrix role , according to the block from the visited array.
        * And also revert the previous assigning of the block role.
        */

        this.interval = setInterval(() => {
            if (this.state.isRunning && this.state.Iter < this.visited.length) {

                const i = this.state.Iter;
                const cell = this.visited[i];
                /**
                 * current showing cell by coloring
                 */
                const currentBlock = this.doColor(cell)
                this.setState(prevState => ({
                    matrix: currentBlock[0],
                    value: currentBlock[1],
                    equation: cell.equation,
                    currentId: this.Id[i]
                }))

                /**
                 * previous showing cell, decoloring it
                 */
                if (i !== 0) {
                    const prevcell = this.visited[i - 1];
                    const prevBlock = this.deColor(cell, prevcell, currentBlock)
                    this.setState(prevState => ({
                        matrix: prevBlock[0],
                        value: prevBlock[1]
                    }))
                }
                /**
                 * increment the iteration
                 */
                this.setState(prevState => ({
                    Iter: prevState.Iter + 1
                }))
            }
        }, 1000);
    }

    render() {
        return (
            <section>
                <div className="visual">
                    <Matrix
                        matrix={this.state.matrix}
                        label={true}
                        title="DP table"
                        labeclassname="label heading"
                    />
                    <br />
                    <Matrix
                        matrix={this.state.value}
                        label={false}
                        title="profits"
                        labeclassname="label subheading"
                    />
                    <br />

                    <button className="button start" onClick={() => this.visualize()}>Start Visualization</button>
                    <div className="control-bar">
                        <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                        <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                    </div>
                    <p className="equation">{this.state.equation}</p>
                </div>
                <div className="desc">
                    <Problem id={this.state.currentId} />
                </div>

            </section>

        )
    }
}

/**
 * matrix is initialised . Used for value array, matrix array and weight array.
 * @param {Integer array} val 
 * @param {Integer} Row 
 * @param {Integer} Col 
 */
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

/**
 * Block of each matrix is created.
 * @param {Integer} value 
 */
const block = (value) => {

    return {
        value: value,
        role: "stay"
    };
};