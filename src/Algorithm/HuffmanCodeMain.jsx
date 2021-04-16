import React from 'react';
//import IntegralKnapsackVisualizer from "../Container/Visualizer/IntegralKnapsackVisualizser"
import HuffmanCodeInput from "../Container/Input/HuffmanCodeInput"
import Main from "../Utils/Main/Main"
export default function HuffmanCodeMain() {

    return (

        <Main
            Visualizer={HuffmanCodeVisualizer}
            Input={HuffmanCodeInput}
            title="Huffman Code"
        />

    );

}
