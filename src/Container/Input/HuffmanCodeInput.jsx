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
        let freqMap = new Map();
        for (let i = 0; i < message.length; i++) {
            if (freqMap.has(message[i])) {
                let freq = freqMap.get(message[i]);
                freqMap.set(message[i], freq + 1);
            } else {
                freqMap.set(message[i], 1);
            }
        }

        const data = {
            freqMap: freqMap
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