import logo from './logo.svg';
import './App.css';
import IntegralKnapsackVisualizer from "./Container/Visualizer/IntegralKnapsackVisualizser"
import IntegralKnapSackInput from "./Container/Input/IntegralKnapSackInput"
import Main from "./Utils/Main/Main"

function App() {
  return (
    <Main
      Visualizer={IntegralKnapsackVisualizer}
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