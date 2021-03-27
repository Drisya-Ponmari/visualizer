import logo from './logo.svg';
import './App.css';
import IntegralKnapsackVisualizer from "./Container/Visualizer/IntegralKnapsackVisualizser"
import IntegralKnapSackInput from "./Container/Input/IntegralKnapSackInput"
import Main from "./Utils/Main/Main"
import FractionalKnapSackVisualizer from "./Container/Visualizer/FractionalKnapSackVisualizer"


function App() {
  //console.log(fractionalKnapSack(3, 50, [10, 20, 30], [60, 100, 120]))
  return (
    //n, W, w, v
    <Main
      Visualizer={FractionalKnapSackVisualizer}
      Input={IntegralKnapSackInput}
      title="Integral Knapsack"
    />
  );
}

export default App;
  /*problem={IntegralKnapSackProblem}
<Main
Visualizer={IntegralKnapsackVisualizer}
Input={IntegralKnapSackInput}
title="Integral Knapsack"
/>
*/