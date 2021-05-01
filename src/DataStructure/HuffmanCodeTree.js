import { Group } from '@progress/kendo-drawing'
import { NewEdge } from "../Components/NewEdge"

import { SmallCircle } from "../Components/SmallCircle"

function circleColor(p1, p2, i) {

    if (p1 === i || p2 === i)
        return 'yellow';
    return 'green';
}
export default function HuffmanCodeTree(surface, data) {

    var group = new Group();
    var nodeCoordinates = [];
    var radius = 30, color = 'green', edgeColor = 'black';
    var left, right;
    var cx = 100, cy = 100, inc = 150, cir, center;
    if (data.edges != null) {
        var lastp1 = data.edges[data.vertices - 1][0], lastp2 = data.edges[data.vertices - 1][1];
    }
    var code = [];
    if (data.label) {
        for (let i = 0; i < data.vertices; i++)
            code.push('');
    }

    for (let i = 0; i < data.leaves; i++) {

        color = circleColor(lastp1, lastp2, i);
        center = [cx, cy];
        cir = SmallCircle(center, data.chars[i] + "::" + data.values[i], radius, color);
        group.append(cir);
        nodeCoordinates.push(center);
        cx += inc;
    }

    for (let i = data.leaves; i < data.vertices; i++) {

        color = circleColor(lastp1, lastp2, i);

        if (i === data.vertices - 1) {
            edgeColor = 'red';
            color = 'pink';
        }
        let p1 = nodeCoordinates[data.edges[i][0]];
        let p2 = nodeCoordinates[data.edges[i][1]];

        cx = (p1[0] + p2[0]) / 2;
        if (data.label) {

            if (p1[0] < p2[0]) {
                left = '1';
                right = '0';

            } else {
                right = '1';
                left = '0';
            }
            code[data.edges[i][0]] = left;
            code[data.edges[i][1]] = right;

        }
        cy = Math.max(p1[1], p2[1]) + (inc / 2);

        center = [cx, cy];
        cir = SmallCircle(center, data.values[i], radius, color);
        nodeCoordinates.push(center);
        group.append(cir);

        let e1 = NewEdge(p1, center, edgeColor, data.label, left);
        let e2 = NewEdge(p2, center, edgeColor, data.label, right);

        group.append(e1);
        group.append(e2);
    }

    if (data.label) {
        for (let i = (data.edges.length) - 1; i >= data.leaves; i--) {
            var p1 = data.edges[i][0];
            var p2 = data.edges[i][1];
            code[p1] = code[i] + code[p1];
            code[p2] = code[i] + code[p2];

        }


        data.updateCode(code);
    }
    surface.draw(group);
}