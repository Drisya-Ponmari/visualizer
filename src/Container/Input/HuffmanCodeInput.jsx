import React, { Component } from "react";
import "../../Utils/Button.css"
import "../../Utils/Label.css"

class HuffmanCodeInput extends Component {

    constructor(props) {

        super(props);
        this.state = {
            message: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    inputPreProcess() {

        let message = this.state.message;
        let leaves = 0, chars = [];
        let freqMap = new Map();
        for (let i = 0; i < message.length; i++) {
            if (freqMap.has(message[i])) {
                let freq = freqMap.get(message[i]);
                freqMap.set(message[i], freq + 1);
            } else {
                freqMap.set(message[i], 1);
                leaves++;
            }
        }
        let sortMap = new Map([...freqMap.entries()].sort((a, b) => a[1] - b[1]))

        let values = [];
        for (let [key, value] of sortMap) {
            values.push(value);
            chars.push(key);
        }
        const data = {
            leaves: leaves,
            chars: chars,
            values: values,
            message: this.state.message
        }
        return data;
    }
    handleSubmit(event) {
        this.props.func(true, this.inputPreProcess())
        event.preventDefault();
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p> sample input <br /> aaaeeebbbg </p>
                <form onSubmit={this.handleSubmit}>
                    <label className="label input"> Message </label>
                    <input type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button className="button submit"> Submit</button>
                </form>
            </div>
        )
    }

}

export default HuffmanCodeInput;