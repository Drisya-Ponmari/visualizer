/**
 * @author Drisya P
 * @since 2020.11.12
 */

import React, { Component } from "react";
import Matrix from "../../Components/Matrix";
import IntegralKnapsack from "../Algorithms/IntegralKnapsack";
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"


// or less ideally


export default class IntegralKnapsackVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matrix: intialMatrix([], props.data.numberOfItems, props.data.capacity),
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0
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
            Iter: 0
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
        this.visited = IntegralKnapsack(this.props.data.numberOfItems, this.props.data.capacity, this.props.data.weights, this.props.data.values);
        // console.log("result from integral Knapsack algorithm" + visited);
        this.handlePlay();
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
                let temp = this.state.matrix;
                let vtemp = this.state.value;
                const cell = this.visited[i];
                /**
                 * current showing cell
                 */
                if (cell.visit.length !== 0)
                    temp[cell.visit[0]][cell.visit[1]].role = "visit";
                if (cell.vindex !== null)
                    vtemp[0][cell.vindex].role = "visit";
                temp[cell.update[0]][cell.update[1]].value = cell.value;
                temp[cell.update[0]][cell.update[1]].role = "update";
                this.setState(prevState => ({
                    matrix: temp,
                    value: vtemp
                }))

                /**
                 * previous showing cell
                 */
                if (i !== 0) {
                    const prevcell = this.visited[i - 1];
                    if (prevcell.visit.length !== 0)
                        temp[prevcell.visit[0]][prevcell.visit[1]].role = "stay";
                    if (prevcell.vindex !== null && (cell.vindex === null || cell.vindex !== prevcell.vindex))
                        vtemp[0][prevcell.vindex].role = "stay";

                    temp[prevcell.update[0]][prevcell.update[1]].role = "stay";
                    this.setState(prevState => ({
                        matrix: temp,
                        value: vtemp
                    }))
                }
                /**
                 * increment the iteration
                 */
                this.setState(prevState => ({
                    Iter: prevState.Iter + 1
                }))
            }
        }, 400);
    }

    render() {
        return (
            <div>
                <div>

                </div>
                <Matrix
                    matrix={this.state.matrix}
                    label={true}
                    title="DP matrix"
                    labeclassname="label heading"
                />
                <br />
                <Matrix
                    matrix={this.state.value}
                    label={false}
                    title="values"
                    labeclassname="label subheading"
                />
                <br />
                <button className="button start" onClick={() => this.visualize()}>Start Visualization</button>
                <div className="control-bar">
                    <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                    <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                </div>
            </div>
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