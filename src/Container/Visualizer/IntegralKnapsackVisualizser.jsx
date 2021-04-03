/**
 * @author Drisya P
 * @since 2020.11.12
 */

import React, { Component } from "react";
import Matrix from "../../Components/Matrix";
import IntegralKnapsack from "../Algorithms/IntegralKnapsack";
import IntegralKnapSackProblem from "../../Problems/IntegralKnapSackProblem"
import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"
//import IntegralKnapSackSubprob from "../Subprobs/IntegralKnapSackSubprob"
import Subproblem from "../../Components/IntegralKnapSack/Subproblem"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
/**
 * @component IntegralKnapsackVisualizer
 * @description Class component responsible for the visualisation.
 */
class IntegralKnapsackVisualizer extends Component {

    /**
     * @constructor
     * @param {object} props contains all the data needed to run Integral knapsack algorithm given by user
     */
    constructor(props) {

        super(props);
        /**
         * state initialisarion.
         * matrix - the dp matrix 
         * weight - weight of items
         * value - value of items
         * isRunning - variable to control start and stop visualisation.
         * Iter - variable keeping tracking of the algorithm step.
         * equation - DP equation
         * currentId - Id correspond to pseudocode line.
         */
        this.state = {
            matrix: intialMatrix([], props.data.numberOfItems, props.data.capacity),
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
            isChange: false,
            len: 1,
            subprobs: [],
            speed: 1000,
        }

    }
    /**
     * @function
     * @param {object} props 
     * @description ReactJS **lifecycle method** , whenever the props given to *IntegralKnapsackVisualizer* class component changes ,this method is called,
     * And hence the state of the class is reinitialized.
     */
    componentWillReceiveProps(props) {
        this.setState({
            matrix: intialMatrix([], props.data.numberOfItems, props.data.capacity),
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
            isChange: false,
            len: 1,
            subprobs: [],
            speed: 1000,
        })

    }

    /**
     * @function
     * @event
     * @description Pausing the visualisation. 
     */
    handlePause() {
        console.log("paused")
        /**
         * set isRunning variable to false
         */
        this.setState(prevState => ({
            isRunning: false
        }))
    }

    /**
     * @function
     * @event
     * @description Resuming the visualisation
     */
    handlePlay() {
        console.log("played")
        /**
         * set isRunning to true
         */
        this.setState(prevState => ({
            isRunning: true
        }))
    }

    handleAlgo() {
        console.log("algo clicked");

        this.setState(prevState => ({
            isChange: !this.state.isChange
        }))
    }

    handleReset() {
        console.log("reset");

        this.setState(prevState => ({
            matrix: intialMatrix([], this.props.data.numberOfItems, this.props.data.capacity),
            weight: intialMatrix(this.props.data.weights, 0, this.props.data.numberOfItems - 1),
            value: intialMatrix(this.props.data.values, 0, this.props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
            isChange: false,
            len: 1,
            subprobs: [],
            speed: 1000,
        }))
    }
    /**
     * @function
     * @description function calls the Integral knapsack algorithm and return the array of objects
     * which has all the history about the updation of each cell in the matrix.
     * And then calls the function that animate the algorithm.
     */
    visualize() {


        const allSteps = IntegralKnapsack(this.props.data.numberOfItems, this.props.data.capacity, this.props.data.weights, this.props.data.values);
        this.visited = allSteps[0];
        this.Id = allSteps[1];
        this.setState(prevState => ({
            subprobs: allSteps[2],
            len: this.visited.length
        }))
        // console.log("result from integral Knapsack algorithm" + visited);
        this.handlePlay();

    }



    /**
     * @function
     * @description Helper Function to check rows and colun index of two cell a and be not the same
     * */
    isNotEqual(a, b) {
        if (a === null || b === null)
            return true;
        if (a[1] === b[1] && a[0] === b[0])
            return false;
        return true;
    }

    /**
     * @function
     * @description Funtion to color the updating , visiting cells
     */
    doColor(cell) {

        let temp = this.state.matrix;
        let vtemp = this.state.value;

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
     *@function
     *@description Function to remove the color previusly updated cell
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
    checkBound() {
        if (this.state.Iter >= this.state.len)
            return true;
        return false;
    }
    /**
     * @function
     * @description React JS **lifecycle** method which is invoked when a component gets unmounted.
     * overriding to clear Setinterval id .
     */
    componentWillUnmount() {
        console.log("cleared")
        clearInterval(this.interval)
    }
    /**
     * @function
     * @description React JS **lifecycle** method which is invoked when a component gets mounted.
     * override to resume the visualisation
     */
    componentWillMount() {
        /**
        * updating the state matrix role , according to the block from the visited array.
        * And also revert the previous assigning of the block role.
        */
        //    if( this.state.Iter >= this.visited.length)
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
        }, this.state.speed);
    }

    /**
     * @function
     * @description ReactJS **lifecycle method** renders the DP matrix, play & pause button , problem statement & pseudocode on UI.
     * 
     */
    render() {
        const isChange = this.state.isChange;
        const id = this.state.currentId;
        const buttonShow = this.checkBound();
        const ButtonName = isChange ? "Algorithm" : "Sub Problem";
        const data = this.state.subprobs;
        //  console.log("buttonshow", buttonShow);
        //console.log(id);
        return (
            <section>

                <div className="visual">
                    <Matrix
                        matrix={this.state.matrix}
                        label={true}
                        title="DP table"
                        labeclassname="label heading"
                        description=" DP[i][j] represents the maximum profit achievable using a knapsack of capacity 'j' and objects 'o1, ...oi'. Pink colour for updation, green and red for the visited cell where green represents for minimum and red for the maximum profit cell"
                    />
                    <br />
                    <Matrix
                        matrix={this.state.value}
                        label={false}
                        title="profits"
                        labeclassname="label subheading"
                        description=""
                    />
                    <br />
                    <div className="control-bar">
                        <button className="button start" onClick={() => this.visualize()}>Start Visualization</button><br />
                        <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                        <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                        <button className="button play" onClick={() => this.handleReset()}>Reset</button>

                        {buttonShow ? <button className="button pause" onClick={() => this.handleAlgo()}>{ButtonName}</button> : ''}
                    </div>
                </div>
                <div className="desc">
                    <p className="equation">Updating equation : {this.state.equation}</p>
                    {isChange ? <Subproblem data={data} /> : <IntegralKnapSackProblem id={id} />}
                </div>

            </section>

        )
    }
}

/**
 * @function
 * @description Helper function. matrix is initialised . Used for value array, matrix array and weight array.
 * @param {Array<integer>} val 
 * @param {integer} Row row of matrix
 * @param {integer} Col column of matrix
 * @see IntegralKnapsackVisualizer
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
 * @function
 * @param {integer} value  value of a matrix block
 * @description Block of each matrix is created.
 * @see IntegralKnapsackVisualizer
 */
const block = (value) => {

    return {
        value: value,
        role: "stay"
    };
};

export default IntegralKnapsackVisualizer;