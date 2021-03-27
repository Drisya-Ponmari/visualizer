import React from 'react';
import IntegralKnapsackVisualizer from "../Container/Visualizer/IntegralKnapsackVisualizser"
import IntegralKnapSackInput from "../Container/Input/IntegralKnapSackInput"
import Main from "../Utils/Main/Main"
export default function IntegralKnapSackMain() {

    return (

        <Main
            Visualizer={IntegralKnapsackVisualizer}
            Input={IntegralKnapSackInput}
            title="Integral Knapsack"
        />
    );

}
