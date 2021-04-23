import { Group } from '@progress/kendo-drawing'
import { NewEdge } from "../Components/NewEdge"

import { SmallCircle } from "../Components/SmallCircle"


export default function HuffmanCodeTree(surface, data) {

    var group = new Group();
    var nodeCoordinates = [];
    var radius = 30, color = 'green', edgeColor = 'black';
    var left, right;
    var cx = 100, cy = 100, inc = 150, cir, center;


    for (let i = 0; i < data.leaves; i++) {

        center = [cx, cy];
        cir = SmallCircle(center, data.chars[i] + "::" + data.values[i], radius, color);
        group.append(cir);
        nodeCoordinates.push(center);
        cx += inc;
    }

    for (let i = data.leaves; i < data.vertices; i++) {

        if (i == data.vertices - 1)
            edgeColor = 'red';
        let p1 = nodeCoordinates[data.edges[i][0]];
        let p2 = nodeCoordinates[data.edges[i][1]];

        cx = (p1[0] + p2[0]) / 2;
        if (p1[0] < p2[0]) {
            left = 1;
            right = 0;
        } else {
            right = 1;
            left = 0;
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

    surface.draw(group);
}