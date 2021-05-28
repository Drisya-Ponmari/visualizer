import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Surface } from '@progress/kendo-drawing';
import "../Utils/Main/Main.css"

class KendoSurface extends Component {

    surface;
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            height: props.height,
            width: props.width,
            datastructure: props.datastructure,
        }
    }
    componentWillReceiveProps(props) {

        this.setState({
            data: props.data,
            height: props.height,
            width: props.width,
            datastructure: props.datastructure
        })
    }
    componentDidMount() {
        this.state.datastructure(this.createSurface(), this.state.data);

    }
    componentDidUpdate() {
        if (this.state.data.code === null)
            this.state.datastructure(this.createSurface(), this.state.data);
    }

    createSurface = () => {

        const element = ReactDOM.findDOMNode(this);
        this.surface = Surface.create(element);
        return this.surface;
    }

    render() {

        return (
            <section id="surface" style={{
                width: this.state.width,
                height: this.state.height,
                display: 'flex'

            }}>

            </section>
        )
    }
}

export default KendoSurface;