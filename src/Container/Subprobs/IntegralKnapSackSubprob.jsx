import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Color, Surface } from '@progress/kendo-drawing';
import Tree from "../../Components/IntegralKnapSack/Tree"

class IntegralKnapSackSubprob extends Component {
    surface;
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
    }
    componentDidMount() {
        //Tree(this.createSurface(), items, data);
        Tree(this.createSurface(), this.state.data.length, this.state.data);
    }
    //data forms  = [[1, 1, 1], [2, 1], [3, 1, 1], [4, 1], [5, 1, 1], [6, 1], [7, 1, 1]]

    createSurface = () => {
        const element = ReactDOM.findDOMNode(this);
        this.surface = Surface.create(element);
        return this.surface;
    }

    render() {
        return (
            <div id="surface" style={{
                height: "2500px", width: "2500px", display: "flex"
            }}>

            </div>
        );
    }
}

export default IntegralKnapSackSubprob;