import React, { Component } from "react";
import Main from "../../Utils/Main/Main";
import IntegralKnapsackVisualizer from "../Visualizer/IntegralKnapsackVisualizser"
export default class IntegralKnapSackInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: null,
            values: null,
            weights: null,
            Capcity: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    handleSubmit(event) {

        this.props.func(true, 1)
        event.preventDefault();
    }
    render() {

        console.log(this.state.isClicked)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="numberOfItems"
                        values={this.state.numberOfItems}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        name="values"
                        values={this.state.values}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        name="weights"
                        values={this.state.weights}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        name="Capacity"
                        values={this.state.Capcity}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}