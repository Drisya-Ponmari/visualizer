import React, { Component } from "react"
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

export default class Main extends Component {
  /**
   * receives props from the App.js 
   * @param {object} props 
   */
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      data: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * visualisation starts by returning the jsx element from the corresponding algorithm passed via props
   */
  startvisualise() {
    const Visualizer = this.props.Visualizer;
    return (
      <Visualizer data={this.state.data} />
    )
  }

  /**
   * this function is called from the input form class of the algorithm,
   * After the Input variables are given
   * @param {boolean} isClicked 
   * @param {object} data 
   */
  handleChange(isClicked, data) {
    this.setState(prevState => {
      return {
        isClicked: isClicked,
        data: data
      }
    })
    console.log("handlechange in main called")
  }

  render() {
    const Visualizer = this.props.Visualizer;
    const Input = this.props.Input;
    const f = this.state.data;
    const g = this.state.isClicked;
    return (
      <body>
        <Header title={this.props.title} />
        <nav>
          <Input func={this.handleChange} />
        </nav>
        <section>
          {g ? <Visualizer data={f} /> : ''}
        </section>
        <Footer />
      </body>
    )
  }
}