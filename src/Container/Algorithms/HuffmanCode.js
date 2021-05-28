function codeProcess(map, leaves) {
    var temp = new Array(leaves)
    for (let [key, value] of map) {
        for (let j = 0; j < value.length; j++) {
            temp[value[j]] = key;
        }
    }
    return temp;
}
function huffmanCode(chars, freq, leaves) {

    var minHeap = [], parents = [];
    var map = new Map();
    var edges = [], values = [], id = [], code = [];
    for (let i = 0; i < leaves; i++) {
        minHeap.push([freq[i], i]);
        edges.push([]);
        values.push(freq[i]);
        map.set(i, [i]);
    }
    parents.push(chars);
    id.push([1, 2]);
    var vertices = leaves;
    var iter = leaves;
    while (minHeap.length !== 1) {

        var leasttwo = minHeap.slice(0, 2);
        var val = leasttwo[0][0] + leasttwo[1][0]
        var p1 = leasttwo[0][1], p2 = leasttwo[1][1];
        var newNode = [val, iter];

        values.push(val);
        edges.push([p1, p2]);

        var rest = minHeap.slice(2, minHeap.length);
        minHeap = rest;
        minHeap.push(newNode);
        minHeap.sort(function (a, b) { return a[0] - b[0]; });

        map.set(iter, map.get(p1).concat(map.get(p2)));
        map.delete(p1);
        map.delete(p2);
        parents.push(codeProcess(map, leaves));

        iter++;
        vertices++;
        id.push([4, 5, 6, 7, 8]);
    }
    id.push([9]);

    const allSteps = {
        vertices: vertices,
        edges: edges,
        values: values,
        id: id,
        parents: parents,
    }

    return allSteps;
}

export default huffmanCode;