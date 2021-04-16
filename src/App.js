import React, { Component } from "react"
import { BrowserRouter, Route, withRouter, Redirect } from "react-router-dom";
import IntegralKnapSackMain from "./Algorithm/IntegralKnapSackMain"
import FractionalKnapSackMain from "./Algorithm/FractionalKnapSackMain"
import Home from "./Algorithm/Home"
import HuffmanCodeMain from "./Algorithm/HuffmanCodeMain"
class DropDown extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }
  render() {
    return (
      <div style={{ textAlign: 'center', padding: "10px", background: 'pink' }}>
        <select onChange={this.onChange} style={{ color: 'black', background: 'pink', height: '40px' }}>
          <option value="home" >Home</option>
          <option value="integralknapsack">Integral Knapsack</option>
          <option value="fractionalknapsack">Fractional Knapsack</option>
          <option value="huffmancode">Huffman Coding</option>
        </select>
      </div>
    );
  }
}
const Menu = withRouter(DropDown);

function App() {

  return (

    <BrowserRouter>
      <div>
        <Menu />
        <Redirect from="/" to="/home" />
        <Route path="/home" render={() => <Home />} />
        <Route path="/integralknapsack" render={() => <IntegralKnapSackMain />} />
        <Route path="/fractionalknapsack" render={() => <FractionalKnapSackMain />} />
        <Route path="/huffmancode" render={() => <HuffmanCodeMain />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
