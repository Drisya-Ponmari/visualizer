import React, { Component } from "react"
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import IntegralKnapsackVisualizer from "../../Container/Visualizer/IntegralKnapsackVisualizser"
import IntegralKnapSackInput from "../../Container/Input/IntegralKnapSackInput"

function startvisualise() {
  return (
    <IntegralKnapsackVisualizer

      v={[60, 100, 120, 100, 1, 1, 1, 1, 1, 1]}
      w={[1, 2, 3, 4, 5, 6, 7, 8, 10, 10]}
      n={10}
      W={2}
      speed={100}
    />
  )
}
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: null,
      data: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(isClicked, data) {
    this.setState({
      isClicked: isClicked,
      data: data
    })
    console.log("handlechange called")
  }

  render() {
    const X = this.props.y;
    return (
      <body>
        <Header title="KnapSack" />
        <nav>
          <X func={this.handleChange} />
        </nav>
        <section>
          <div className="visual">
            {this.state.isClicked ? startvisualise() : ''}
          </div>
          <div className="desc">

          </div>
        </section>
        <Footer />
      </body>
    )
  }
}