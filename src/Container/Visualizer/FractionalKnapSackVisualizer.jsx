
import React, { Component } from 'react';
import FractionalKnapSack from '../Algorithms/FractionalKnapSack'
import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"
import Matrix from "../../Components/Matrix";

class IntegralKnapsackVisualizer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
            isChange: false,

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
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            speed: props.speed,
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: null,
            isChange: false,
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

    visualize() {

        const allSteps = FractionalKnapSack(this.props.data.numberOfItems, this.props.data.capacity, this.props.data.weights, this.props.data.values);
        this.visited = allSteps;
        this.handlePlay();

    }



    /**
     * @function
     * @description Funtion to color the updating , visiting cells
     */
    doColor(cell) {

        let vtemp = this.state.value;
        let wtemp = this.state.weight;
        vtemp[0][cell.index].role = 'update';
        wtemp[0][cell.index].role = 'update';
        return [vtemp, wtemp];
    }

    /**
     *@function
     *@description Function to remove the color previusly updated cell
     */
    deColor(cell, prevcell) {

        let vtemp = this.state.value;
        let wtemp = this.state.weight;

        if (cell.index !== prevcell.index) {
            vtemp[0][prevcell.index].role = 'stay';
            wtemp[0][prevcell.index].role = 'stay';

        }
        return [vtemp, wtemp];
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
        console.log("hey");
        this.interval = setInterval(() => {
            if (this.state.isRunning && this.state.Iter < this.visited.length) {

                const i = this.state.Iter;
                const cell = this.visited[i];
                /**
                 * current showing cell by coloring
                 */

                const currentBlock = this.doColor(cell)
                this.setState(prevState => ({
                    value: currentBlock[0],
                    weight: currentBlock[1],
                    equation: cell.equation,
                    currentId: cell.Id
                }))

                /**
                 * previous showing cell, decoloring it
                 */
                if (i !== 0) {
                    const prevcell = this.visited[i - 1];
                    const prevBlock = this.deColor(cell, prevcell)
                    this.setState(prevState => ({
                        value: prevBlock[0],
                        weight: prevBlock[1],
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

    /**
     * @function
     * @description ReactJS **lifecycle method** renders the DP matrix, play & pause button , problem statement & pseudocode on UI.
     * 
     */
    render() {
        const isChange = this.state.isChange;
        const id = this.state.currentId;
        return (
            <section>
                <div className="visual">
                    <Matrix
                        matrix={this.state.value}
                        label={false}
                        title="profits"
                        labeclassname="label subheading"
                        description=""
                    />
                    <br />
                    <Matrix
                        matrix={this.state.weight}
                        label={false}
                        title="weights"
                        labeclassname="label subheading"
                        description=""
                    />
                    <button className="button start" onClick={() => this.visualize()}>Start Visualization</button>
                    <div className="control-bar">
                        <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                        <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                    </div>
                </div>
                <section>
                    <div className="desc">
                        <p className="equation">Updating equation : {this.state.equation}</p>
                    </div>
                </section>

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