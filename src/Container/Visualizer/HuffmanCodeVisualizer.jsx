import React, { Component } from "react";
class HuffmanCodeVisualizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaves: props.data.leaves,
            vertices: props.data.leaves,
            edges: null,
            values: props.data.values,
            chars: props.data.chars,
        }
    }

    /**
     * function called when the props passing to the componenet changes
     */

    componentWillReceiveProps(props) {

        this.setState({
            leaves: props.data.leaves,
            vertices: props.data.leaves,
            edges: null,
            values: props.data.values,
            chars: props.data.chars,
        })
    }
    render() {
        return (
            <section>
                <section>
                    {console.log(this.state)}
                </section>
            </section>
        )
    }

}

export default HuffmanCodeVisualizer;