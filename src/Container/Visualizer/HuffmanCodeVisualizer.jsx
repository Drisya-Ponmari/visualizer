import React, { Component } from "react";

import KendoSurface from "../../Utils/KendoSurface"
import HuffmanCodeTree from "../../DataStructure/HuffmanCodeTree"
import HuffmanCode from "../Algorithms/HuffmanCode"
import HuffmanCodeProblem from "../../Problems/HuffmanCodeProblem"
import Matrix from "../../Components/Matrix";

import "../../Utils/Main/Main.css"
import "../../Utils/Font.css"
import "../../Utils/Button.css"
import "../../Utils/ControlBar.css"
import "../../Utils/Label.css"
import { createMatrix } from "../../Utils/CreateMatrix";

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
            Id: null,
            code: null,
            subprobs: props.data.message,
        }
        this.updateCode = this.updateCode.bind(this);
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
            Id: null,
            code: null,
            subprobs: props.data.message,
        }))
    }

    /**
     * label updating
     */
    updateCode(code) {

        this.setState({
            code: code,
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
            Iter: prevState.leaves,
        }))
    }

    handleEnd() {

        if (this.state.allSteps === null)
            this.visualize();
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
    handleReset() {
        this.componentWillReceiveProps(this.props);
    }
    /**
     * function is called when the startvisualiation is clicked
     */

    visualize() {


        const allSteps = HuffmanCode(this.state.chars, this.state.freq, this.state.leaves, this.props.data.message);
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
                const j = i - this.state.leaves;
                const edges = this.state.allSteps.edges.slice(0, i);
                const values = this.state.allSteps.values.slice(0, i);
                const Id = this.state.allSteps.id[j];
                const subprobs = this.state.allSteps.parents.slice(0, j + 1)

                this.setState(prevState => ({
                    vertices: i,
                    edges: edges,
                    values: values,
                    Id: Id,
                    Iter: prevState.Iter + 1,
                    subprobs: subprobs
                }))

            }
            else if (this.state.isRunning && this.state.Iter === this.state.allSteps.vertices + 1) {
                this.setState(prevState => ({
                    label: true,
                    Iter: prevState.Iter + 1,
                    Id: [9],
                    isRunning: false,
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
            label: this.state.label,
            updateCode: this.updateCode,
            code: this.state.code
        };
        let width = Math.max(this.state.leaves * 150, 350);
        var height = 620;
        var huffman = this.state.code !== null ? [this.state.chars, this.state.code.slice(0, this.state.leaves)] : '';
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
                <div className="smallsection">
                    <label className="label heading"> Subproblems </label>
                    <br />
                    {this.state.subprobs}
                    {this.state.label ? <Matrix
                        matrix={createMatrix(huffman, 1, this.state.leaves - 1)}
                        label={false}
                        title=" Result"
                        labeclassname="label subheading"
                        description=""
                    /> : ''}

                </div>
                <section>
                    <HuffmanCodeProblem id={this.state.Id} />
                </section>

            </section>
        )
    }

}

export default HuffmanCodeVisualizer;