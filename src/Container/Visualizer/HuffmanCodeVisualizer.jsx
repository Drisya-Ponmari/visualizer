import React, { Component } from "react";

import KendoSurface from "../../Utils/KendoSurface"
import HuffmanCodeTree from "../../DataStructure/HuffmanCodeTree"
import HuffmanCode from "../Algorithms/HuffmanCode"
import HuffmanCodeProblem from "../../Problems/HuffmanCodeProblem"

import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"
import "../../Utils/Label.css"

class HuffmanCodeVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaves: props.data.leaves,
            vertices: props.data.leaves,
            edges: null,
            values: props.data.values,
            chars: props.data.chars,
            freq: props.data.values,
            Iter: props.data.leaves,
            allSteps: null,
            isRunning: false,
            label: false,
            Id: null
        }
    }

    /**
     * function called when the props passing to the componenet changes
     */

    componentWillReceiveProps(props) {

        this.setState(prevState => ({
            leaves: props.data.leaves,
            vertices: props.data.leaves,
            edges: null,
            values: props.data.values,
            chars: props.data.chars,
            freq: props.data.values,
            Iter: props.data.leaves,
            allSteps: null,
            isRunning: false,
            label: false,
            Id: null
        }))
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
            Iter: prevState.leaves,
        }))
    }

    handleEnd() {

        this.setState(prevState => ({
            Iter: prevState.allSteps.vertices,
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

    /**
     * function is called when the startvisualiation is clicked
     */
    visualize() {


        const allSteps = HuffmanCode(this.state.chars, this.state.freq, this.state.leaves);
        /*console.log(all);
        const allSteps = {
            vertices: 14,
            edges: [[], [], [], [0, 1], [3, 2], [4, 3], [5, 4], [6, 5], [7, 6], [8, 7], [9, 8], [10, 9], [11, 10], [12, 11]],
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            labels: []
        }*/

        this.setState(prevState => ({
            allSteps: allSteps,
            isRunning: true,
        }))

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillMount() {
        this.interval = setInterval(() => {

            if (this.state.isRunning && this.state.Iter <= this.state.allSteps.vertices) {

                const i = this.state.Iter;
                const edges = this.state.allSteps.edges.slice(0, i);
                const values = this.state.allSteps.values.slice(0, i);
                const Id = this.state.allSteps.id[i - this.state.leaves];

                this.setState(prevState => ({
                    vertices: i,
                    edges: edges,
                    values: values,
                    Id: Id,
                    Iter: prevState.Iter + 1
                }))

            }
            else if (this.state.isRunning && this.state.Iter == this.state.allSteps.vertices + 1) {
                this.setState(prevState => ({
                    label: true,
                    Iter: prevState.Iter + 1,
                    Id: [9]
                }))
            }
        }, 1000)
    }

    render() {
        const data = {
            leaves: this.state.leaves,
            vertices: this.state.vertices,
            edges: this.state.edges,
            values: this.state.values,
            chars: this.state.chars,
            label: this.state.label
        };
        let width = Math.max(this.state.leaves * 150, 350);
        var height = 620;
        //this.state.vertices - this.state. > 15 ? height = 700 + (this.state.vertices - 8) * 60 : height = 700;
        return (
            <section>
                <div className="visual">
                    <label className="label heading"> Huffman Code </label>
                    <KendoSurface data={data} datastructure={HuffmanCodeTree} height={height} width={width} />
                    <div className="control-bar">
                        <button className="button start" onClick={() => this.visualize()}>Start Visualization</button> <br />
                        <button className="button play" onClick={() => this.handlePlay()}>Resume</button>
                        <button className="button pause" onClick={() => this.handlePause()}>Pause</button>
                        <button className="button play" onClick={() => this.handleReset()}>Reset</button>
                        <button className="button play" onClick={() => this.handleEnd()}>End</button>
                    </div>
                </div>
                <section>
                    <HuffmanCodeProblem id={this.state.Id} />
                </section>

            </section>
        )
    }

}

export default HuffmanCodeVisualizer;