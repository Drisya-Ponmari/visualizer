function huffmanCode(chars, freq, leaves) {

    var minHeap = []
    var edges = [], values = [], id = [], code = [];
    for (let i = 0; i < leaves; i++) {
        minHeap.push([freq[i], i]);
        edges.push([]);
        values.push(freq[i]);
    }
    id.push([1, 2]);
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
        id.push([4, 5, 6, 7, 8]);
    }
    var p1, p2;
    for (let i = 0; i < vertices; i++) {
        code[i] = '';
    }
    for (let i = edges.length - 1; i >= 0; i--) {

        p1 = edges[i][0];
        p2 = edges[i][1];
        code[p1] = code[i];
        code[p2] = code[i];
        if (values[p1] < values[p2]) {
            code[p1] += '1';
            code[p2] += '0';
        } else {
            code[p1] += '0';
            code[p2] += '1';
        }
    }
    console.log(chars, code);
    id.push([9]);
    const allSteps = {
        vertices: vertices,
        edges: edges,
        values: values,
        id: id
    }

    return allSteps;
}

export default huffmanCode;