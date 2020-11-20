import React, { Component } from "react"
import "./ControlBar.css"
import "../Button.css"

export default class Check extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button className="button start" onClick={this.props.visualize}>Start Visualization</button>
                <div className="control-bar">
                    <button className="button play" onClick={this.props.play}>Resume</button>
                    <button className="button pause" onClick={this.props.pause}>Pause</button>
                </div>
            </div>
        )
    }
}