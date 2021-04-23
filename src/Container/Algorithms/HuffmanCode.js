function huffmanCode(chars, freq, leaves) {

    /*const allSteps = {
        vertices: 14,
        edges: [[], [], [], [0, 1], [3, 2], [4, 3], [5, 4], [6, 5], [7, 6], [8, 7], [9, 8], [10, 9], [11, 10], [12, 11]],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labels: []
    }*/


    var minHeap = []
    var edges = [], values = [];
    for (let i = 0; i < leaves; i++) {
        minHeap.push([freq[i], i]);
        edges.push([]);
        values.push(freq[i]);
    }

    var vertices = leaves;
    var iter = leaves;
    while (minHeap.length != 1) {

        console.log(minHeap);
        var leasttwo = minHeap.slice(0, 2);
        var val = leasttwo[0][0] + leasttwo[1][0]
        values.push(val);
        var newNode = [val, iter];
        edges.push([leasttwo[0][1], leasttwo[1][1]]);
        var rest = minHeap.slice(2, minHeap.length);
        minHeap = rest;
        minHeap.push(newNode);
        minHeap.sort(function (a, b) { return a[0] - b[0]; });
        vertices++;
        iter++;
    }
    const allSteps = {
        vertices: vertices,
        edges: edges,
        values: values,
    }
    //  console.log(allSteps);


    return allSteps;
}

export default huffmanCode;