
/**
 * @author Drisya P
 */
import React, { Component } from "react";
import "../../Utils/Button.css"
import "../../Utils/Label.css"

/**
 * @component IntegralKnapSackInput
 * @description Class component that takes care of Integral KnapSack algorithm input
 * constructor receives props from the parent component
 * sets intial states needed for IN(Integral Knapsack) algorithm and binds event handlers.
 * @listens props.func
 */
class IntegralKnapSackInput extends Component {

    /**
     * @constructor 
     * @param {function} props Contains a function (which helps to start visualisation) that is called when the input form is submitted.
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
     * @function
     * @event 
     * @param {object} contains details (value, name etc )about an input field
     * @description Whenever we change an input field , corresponding state of that entity changes.
     */
    handleChange(event) {

        const { name, value } = event.target
        this.setState({ [name]: value });
    }


    /**
     * @function
     * @description Function to preprocess the input given by User. For Integral Knapsack inputs are given by comman seperated.
     * This function split the input and make it in to array. And all the input is wrapped in to an object called 'data'
     */
    inputPreProcess() {

        /**
         * Extracting input values
         */
        let temp_values = this.state.values.split(',');
        let temp_weights = this.state.weights.split(',');
        const values = temp_values.map((num) => { return Number(num) });
        const weights = temp_weights.map((num) => { return Number(num) });
        const number = values.length;
        const capacity = Number(this.state.Capacity)

        /**
         * Wrapping up weight, value, capacity of knapsack in to an object.
         */
        const data = {
            values: values,
            weights: weights,
            numberOfItems: number,
            capacity: capacity
        }
        return data;
    }

    /**
     * @function
     * @event
     * @param {object} event All information about the input field
     * @description function 'inputPreProcess' is called when the input form is submitted and later a function in Main component
     * is called 
     * @see Main#handleChange
     */
    handleSubmit(event) {

        this.props.func(true, this.inputPreProcess())
        event.preventDefault();
    }

    /**
     * @function
     * @description ReactJS **Lifecycle Method** helps to render the Input form in the UI.
     */
    render() {

        return (
            <div style={{ textAlign: 'center' }} >
                <form onSubmit={this.handleSubmit}>
                    <label className="label input">profit array</label>
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
                    <label className="label input" >Knapsack capacity </label>
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

export default IntegralKnapSackInput;