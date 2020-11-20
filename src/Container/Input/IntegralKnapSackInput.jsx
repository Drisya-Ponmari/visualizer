import React, { Component } from "react";
import "../../Utils/Button.css"
import "../../Utils/Label.css"

export default class IntegralKnapSackInput extends Component {

    /**
     * Input form for the Integral knapsack problem , which accepts value, weight of the item and capacity of the knapsack.
     * @param {object} props  includes the function that has to be called in main class after the form is submitted 
     */
    constructor(props) {
        super(props);

        this.state = {
            values: null,
            weights: null,
            Capcity: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    /**
     * Helps in dynamic change in the input form 
     */
    handleChange(event) {

        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    /**
     * Input values converted to array of integers, by splitting using comma.
     */
    inputProcess() {

        let temp_values = this.state.values.split(',');
        let temp_weights = this.state.weights.split(',');
        const values = temp_values.map((num) => { return Number(num) });
        const weights = temp_weights.map((num) => { return Number(num) });
        const number = values.length;
        const capacity = Number(this.state.Capacity)

        const data = {
            values: values,
            weights: weights,
            numberOfItems: number,
            capacity: capacity
        }
        return data;
    }

    /**
     * After submition of the form , parent class function is called by passing
     * a signal (boolen variable) and the necessary data
     */
    handleSubmit(event) {

        this.props.func(true, this.inputProcess())
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="label input">value array</label>
                    <input type="text"
                        name="values"
                        value={this.state.values}
                        onChange={this.handleChange}
                    />

                    <label className="label input" >weight array</label>
                    <input type="text"
                        name="weights"
                        value={this.state.weights}
                        onChange={this.handleChange}
                    />
                    <label className="label input" >capacity array </label>
                    <input type="text"
                        name="Capacity"
                        value={this.state.Capcity}
                        onChange={this.handleChange}
                    />
                    <button className="button submit"> Submit</button>
                </form>
            </div>
        )
    }
}