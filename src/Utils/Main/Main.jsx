import React, { Component } from "react"
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      data: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeSpeedhandler = this.changeSpeedhandler.bind(this)
  }


  startvisualise() {
    const Visualizer = this.props.Visualizer;
    return (
      <Visualizer data={this.state.data} speed={this.state.speed} />
    )
  }

  changeSpeedhandler(Speed) {
    this.setState(prevState => {
      return {
        speed: Speed
      }
    })

  }

  handleChange(isClicked, data) {
    this.setState(prevState => {
      return {
        isClicked: isClicked,
        data: data
      }
    })
    console.log("handlechange called")
    console.log(isClicked)
  }

  render() {
    const Visualizer = this.props.Visualizer;
    const Input = this.props.Input;
    const f = this.state.data;
    const g = this.state.isClicked;
    const s = this.state.speed;
    return (
      <body>
        <Header title={this.props.title} />
        <nav>
          <Input func={this.handleChange} />
        </nav>
        <section>
          <div className="visual">
            {g ? <Visualizer data={f} speed={s} /> : ''}
            {console.log(this.state.data)}
          </div>
          <div className="desc">
            Integral knapsack problem
          </div>
        </section>
        <Footer />
      </body>
    )
  }
}