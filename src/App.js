import logo from './logo.svg';
import './App.css';
import Temp from "./temp"
import IntegralKnapsackVisualizer from "./Container/Visualizer/IntegralKnapsackVisualizser"
import IntegralKnapSackInput from "./Container/Input/IntegralKnapSackInput"
import Main from "./Utils/Main/Main"

function App() {
  return (
    <Main
      IntegralKnapSackInput={IntegralKnapsackVisualizer}
      input={IntegralKnapSackInput}
      problem={IntegralKnapSackProblem}
    />
  );
}

export default App;
