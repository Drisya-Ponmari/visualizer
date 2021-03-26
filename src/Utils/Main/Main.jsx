/**
 * @author Drisya P
 */
import React, { Component } from "react"
import "./Main.css"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

/**
 * @component
 * @description receives props from App.js which has
 * details about the algorithm to be visualized.
 */
class Main extends Component {
  /**
   * @constructor
   * @param {object} props contains algorithms, visualizer and Inpur form
   * class components 
   */
  constructor(props) {
    super(props)
    /**
     * isClicked - to check whether input is submitted by the user.
     * data - user input data
     */
    this.state = {
      isClicked: false,
      data: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * @function
   * @description visualisation starts by returning the jsx element from the corresponding algorithm passed via props
   */
  startvisualise() {
    const Visualizer = this.props.Visualizer;
    return (
      <Visualizer data={this.state.data} />
    )
  }

  /**
   * @function
   * @description function is called from the input form class of the algorithm,
   * After the Input variables are given
   * @param {boolean} isClicked 
   * @param {object} data 
   * @see IntegralKnapSackInput#handleSubmit
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

  /**
   * @function
   * @description **lifecyle method** that take care of all layout showing on UI.
   */
  render() {
    const Visualizer = this.props.Visualizer;
    const Input = this.props.Input;
    const data = this.state.data;
    const isClicked = this.state.isClicked;
    return (

      <body>
        <Header title={this.props.title} />

        <nav>
          <Input func={this.handleChange} />
        </nav>
        <section>
          {isClicked ? <Visualizer data={data} /> : ''}
        </section>
        <Footer />
      </body>


    )
  }
}

export default Main;