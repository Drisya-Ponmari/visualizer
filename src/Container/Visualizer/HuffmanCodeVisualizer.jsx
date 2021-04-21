import React, { Component } from "react";

import KendoSurface from "../../Utils/KendoSurface"
import HuffmanCodeTree from "../../DataStructure/HuffmanCodeTree"

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

        this.setState(prevState => ({
            leaves: props.data.leaves,
            vertices: props.data.leaves,
            edges: null,
            values: props.data.values,
            chars: props.data.chars,
        }))
    }
    render() {
        const data = {
            leaves: this.state.leaves,
            vertices: this.state.leaves,
            edges: null,
            values: this.state.values,
            chars: this.state.chars,
        };
        console.log(data);
        return (
            <section>
                <section>
                    <KendoSurface data={data} datastructure={HuffmanCodeTree} height="2000px" width="2000px" />
                </section>
            </section>
        )
    }

}

export default HuffmanCodeVisualizer;