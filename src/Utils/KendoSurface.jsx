import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Surface } from '@progress/kendo-drawing';

class KendoSurface extends Component {

    surface;
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            height: props.height,
            width: props.width,
            datastructure: props.datastructure
        }
    }
    componentWillReceiveProps(props) {
        console.log(props);
        this.setState(prevState => ({
            data: props.data,
            height: props.height,
            width: props.width,
            datastructure: props.datastructure
        }))
    }
    componentDidMount() {

        console.log(this.state.data);
        this.state.datastructure(this.createSurface(), this.state.data);
    }

    createSurface = () => {

        const element = ReactDOM.findDOMNode(this);
        this.surface = Surface.create(element);
        return this.surface;
    }

    render() {
        return (
            <div id="surface" style={{ height: this.state.height, width: this.state.width }}>

            </div>
        )
    }
}

export default KendoSurface;