
function fractionalKnapSack(n, W, w, v) {


    let visited = [];
    let valbywt = [];
    for (let i = 0; i < n; i++) {
        valbywt.push([(v[i] / w[i]).toPrecision(3), i]);
    }

    valbywt.sort(function (a, b) {
        return a[0] < b[0] ? -1 : 1;
    })
    let index = []
    for (let i = 0; i < n; i++) {
        index.push(valbywt[i][1]);
    }

    let currWt = 0, currVal = 0;
    for (let i = n - 1; i >= 0; i--) {

        let j = index[i];
        if (W - w[j] >= 0) {
            currWt += w[j];
            currVal += v[j];
            W = W - w[j];
            visited.push(createCell(v[j], w[j], j, "", 0));
        } else {
            let fraction = (W / w[j]).toPrecision(3);
            currVal += (v[j] * fraction);
            currWt += (w[j] * fraction);
            W = W - (w[j] * fraction);
            visited.push(createCell(v[j] * fraction, w[j] * fraction, j, "", 0))
        }
    }
    return visited;
}

const createCell = (value, weight, index, equation, Id) => {
    return {
        value: value,
        weight: weight,
        index: index,
        equation: equation,
        Id: Id
    };
};

export default fractionalKnapSack;