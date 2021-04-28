function codeProcess(map, leaves, charMap, message) {

    var temp = new Array(leaves)
    for (let [key, value] of map) {
        for (let j = 0; j < value.length; j++) {
            temp[value[j]] = key;
        }
    }

    var tempMessage = '';
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let index = charMap.get(char);
        if (temp[index] >= leaves)
            tempMessage = tempMessage + temp[index];
        else
            tempMessage += char;
        if (i !== message.length - 1)
            tempMessage += '-';
        else
            tempMessage += '\n';

    }

    return tempMessage;
}
function huffmanCode(chars, freq, leaves, message) {

    var minHeap = [], parents = [];
    var map = new Map();
    var charMap = new Map();
    var edges = [], values = [], id = [];
    for (let i = 0; i < leaves; i++) {
        minHeap.push([freq[i], i]);
        edges.push([]);
        values.push(freq[i]);
        map.set(i, [i]);
        charMap.set(chars[i], i);
    }
    parents.push((message + '\n'));
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
        parents.push(codeProcess(map, leaves, charMap, message));

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