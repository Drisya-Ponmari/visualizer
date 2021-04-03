
function fractionalKnapSack(n, W, w, v) {

    let valbywt = [];
    for (let i = 0; i < n; i++) {
        valbywt.push([(v[i] / w[i]), i]);
    }

    valbywt.sort(function (a, b) {
        return a[0] < b[0] ? -1 : 1;
    })
    let index = []

    for (let i = 0; i < n; i++) {
        index.push(valbywt[i][1]);
    }

    let weightArray = [], valueArray = [], ind = [], equation = [], Id = [];
    for (let i = n - 1; i >= 0; i--) {

        let j = index[i];
        if (W - w[j] >= 0) {
            W = W - w[j];
            if (v[j] !== 0) {
                weightArray.push(w[j]);
                valueArray.push(v[j]);
                ind.push(j);
                equation.push("hello/\n world");
                Id.push([5, 6, 7]);
            }
        } else {
            let fraction = (W / w[j]);
            let val = (v[j] * fraction);
            let wt = (w[j] * fraction);
            W = W - wt;
            if (val !== 0) {
                weightArray.push(wt);
                valueArray.push(val);
                ind.push(j);
                equation.push("");
                Id.push([9, 10, 11]);

            }
        }
    }
    return [weightArray, valueArray, ind, equation, Id];
}

export default fractionalKnapSack;