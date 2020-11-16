import React, { Component } from "react";
import "../../Utils/Button.css"
import "../../Utils/Label.css"
export default class IntegralKnapSackInput extends Component {

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


    handleChange(event) {

        const { name, value } = event.target
        this.setState({ [name]: value });
    }

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