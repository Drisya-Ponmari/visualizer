import React from 'react';
import FractionalKnapSackVisualizer from "../Container/Visualizer/FractionalKnapSackVisualizer"
import IntegralKnapSackInput from "../Container/Input/IntegralKnapSackInput"
import Main from "../Utils/Main/Main"
export default function FractionalKnapSackMain() {

    return (

        <Main
            Visualizer={FractionalKnapSackVisualizer}
            Input={IntegralKnapSackInput}
            title="Fractional Knapsack"
        />
    );

}
