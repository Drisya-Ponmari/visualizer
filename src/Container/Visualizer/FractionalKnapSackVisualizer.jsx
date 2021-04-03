
import React, { Component } from 'react';
import FractionalKnapSack from '../Algorithms/FractionalKnapSack'
import FractionalKnapSackProblem from "../../Problems/FractionalKnapSackProblem"
import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"
import Matrix from "../../Components/Matrix";
import Box from "../../Components/Box/Box"

class FractionalKnapsackVisualizer extends Component {
    constructor(props) {

        super(props);
        let density = []
        for (let i = 0; i < props.data.values.length; i++) {
            density.push((props.data.values[i] / props.data.weights[i]).toFixed(2));
        }
        this.state = {
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            density: intialMatrix(density, 0, props.data.numberOfItems - 1),
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: [2],
            weightArray: [],
            valueArray: [],
            index: [],
            color: [],
            item: 0,
            currentWt: 0,
            currentVal: 0,


        }


    }
    /**
     * @function
     * @param {object} props 
     * @description ReactJS **lifecycle method** , whenever the props given to *IntegralKnapsackVisualizer* class component changes ,this method is called,
     * And hence the state of the class is reinitialized.
     */
    componentWillReceiveProps(props) {
        let density = []
        for (let i = 0; i < props.data.values.length; i++) {
            density.push((props.data.values[i] / props.data.weights[i]).toFixed(2));
        }
        this.setState({
            weight: intialMatrix(props.data.weights, 0, props.data.numberOfItems - 1),
            value: intialMatrix(props.data.values, 0, props.data.numberOfItems - 1),
            density: intialMatrix(density, 0, props.data.numberOfItems - 1),
            speed: props.speed,
            isRunning: false,
            Iter: 0,
            equation: null,
            currentId: [2],
            weightArray: [],
            valueArray: [],
            index: [],
            color: [],
            item: 0,
            currentWt: 0,
            currentVal: 0,

        })

    }

    /**
     * @function
     * @event
     * @description Pausing the visualisation. 
     */
    handlePause() {

        /**
         * set isRunning variable to false
         */
        this.setState(prevState => ({
            isRunning: false
        }))

    }

    handleReset() {


        this.setState(prevState => ({
            Iter: 0,
        }))
    }

    handleEnd() {

        this.setState(prevState => ({
            Iter: this.state.index.length - 1
        }))
    }
    /**
     * @function
     * @event
     * @description Resuming the visualisation
     */
    handlePlay() {

        /**
         * set isRunning to true
         */
        this.setState(prevState => ({
            isRunning: true
        }))
    }



    visualize() {

        const allSteps = FractionalKnapSack(this.props.data.numberOfItems, this.props.data.capacity, this.props.data.weights, this.props.data.values);
        this.equationArray = allSteps[3];
        this.IdArray = allSteps[4];

        this.setState(prevState => ({
            weightArray: allSteps[0],
            valueArray: allSteps[1],
            index: allSteps[2],

        }))

        let n = allSteps[0].length;
        let col = [];
        for (let i = 0; i < n; i++) {
            var letters = '0123456789ABCDEF';
            var c = '#';
            for (var j = 0; j < 6; j++) {
                c += letters[Math.floor(Math.random() * 16)];
            }
            col.push(c);
        }
        this.setState(prevState => ({
            color: col
        }))
        this.handlePlay();

    }



    /**
     * @function
     * @description Funtion to color the updating , visiting cells
     */
    doColor(i) {

        let vtemp = this.state.value;
        let wtemp = this.state.weight;
        let dtemp = this.state.density;
        vtemp[0][i].role = 'update';
        wtemp[0][i].role = 'update';
        dtemp[0][i].role = 'update';
        return [vtemp, wtemp, dtemp];
    }

    /**
     *@function
     *@description Function to remove the color previusly updated cell
     */
    deColor(i, previ) {

        let vtemp = this.state.value;
        let wtemp = this.state.weight;
        let dtemp = this.state.density;

        if (i !== previ) {
            vtemp[0][previ].role = 'stay';
            wtemp[0][previ].role = 'stay';
            dtemp[0][previ].role = 'stay';

        }
        return [vtemp, wtemp, dtemp];
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
        this.interval = setInterval(() => {
            if (this.state.isRunning && this.state.Iter < this.state.index.length) {


                const i = this.state.Iter;

                const position = this.state.index[i];
                /**
                 * current showing cell by coloring
                 */

                const currentBlock = this.doColor(position)
                this.setState(prevState => ({
                    value: currentBlock[0],
                    weight: currentBlock[1],
                    density: currentBlock[2],
                    equation: "",
                    item: position,
                    currentWt: this.state.weightArray[i],
                    currentVal: this.state.valueArray[i],
                    currentId: this.IdArray[i],
                }))

                /**
                 * previous showing cell, decoloring it
                 */
                if (i !== 0) {
                    const prevposition = this.state.index[i - 1];
                    const prevBlock = this.deColor(position, prevposition)
                    this.setState(prevState => ({
                        value: prevBlock[0],
                        weight: prevBlock[1],
                        density: prevBlock[2],
                    }))
                }
                /**
                 * increment the iteration
                 */
                this.setState(prevState => ({
                    Iter: this.state.Iter + 1
                }))
            } /*else if (this.state.Iter >= this.state.index.length) {
                this.setState(prevState => ({
                    currentId: [13]
                }))
            }*/
        }, 2000);
    }

    /**
     * @function
     * @description ReactJS **lifecycle method** renders the DP matrix, play & pause button , problem statement & pseudocode on UI.
     * 
     */
    render() {
        const wt = (this.state.weightArray.slice(0, this.state.Iter));
        const val = (this.state.valueArray.slice(0, this.state.Iter));
        const color = (this.state.color.slice(0, this.state.Iter));
        //  console.log(this.state.density)
        return (
            <section>
                <section>
                    <div style={{ marginRight: "30px", marginBottom: "30px", marginTop: "30px" }}>
                        <Box weightArray={wt} valueArray={val} color={color} capacity={this.props.data.capacity} item={this.state.index} /> <br />

                        <div className="control-bar">
                            <button className="button start" onClick={() => this.visualize()}>Start Visualization</button> <br />
                            <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                            <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                            <button className="button play" onClick={() => this.handleReset()}>Reset</button>
                            <button className="button play" onClick={() => this.handleEnd()}>End</button>
                        </div>
                    </div>
                </section>
                <div className="visual">
                    <Matrix
                        matrix={this.state.value}
                        label={false}
                        title="profits"
                        labeclassname="label subheading"
                        description=""
                    />
                    <Matrix
                        matrix={this.state.weight}
                        label={false}
                        title="weights"
                        labeclassname="label subheading"
                        description=""
                    />
                    <Matrix
                        matrix={this.state.density}
                        label={false}
                        title="Profit Per Weight"
                        labeclassname="label subheading"
                        description=""
                    />
                    <br />
                    <div className="desc">
                        <p className="label subheading">Item profit taken: </p>
                        <p className="equation"> {this.state.currentVal.toFixed(2)} </p>
                        <p className="label subheading">Item weight taken: </p>
                        <p className="equation"> {this.state.currentWt.toFixed(2)} </p>
                    </div>
                    <br />

                </div>
                <section>
                    <FractionalKnapSackProblem id={this.state.currentId} />
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

    console.log(val);
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

export default FractionalKnapsackVisualizer;