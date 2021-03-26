import { Group } from '@progress/kendo-drawing';
import { NewCircle } from "../NewCircle";
import { NewEdge } from "../NewEdge"

export default function Tree(surface, vertices, values) {


    var group = new Group();
    var vertexCoordinates = [];

    var p = 500;
    var y = 150;
    var xin = 100;
    var yin = 100;
    var cir;
    if (vertices >= 1) {

        cir = NewCircle([p, y], values[0]);
        vertexCoordinates.push([p, y + 50]);
        group.append(cir);

    }
    var i = 2;
    while (i <= vertices) {


        cir = NewCircle([p - xin, y + yin], values[i - 1]);
        vertexCoordinates.push([p - xin, y + yin + 20]);
        group.append(cir);

        cir = NewCircle([p + xin, y + yin], values[i]);
        vertexCoordinates.push([p + xin, y + yin + 50]);
        group.append(cir);

        p = p + xin;
        y = y + yin;

        i = i + 2;
    }
    console.log(vertexCoordinates);
    for (i = 1; i <= vertices - 2; i += 2) {
        var edge = NewEdge(vertexCoordinates[i - 1], vertexCoordinates[i], 'black', true);
        group.append(edge);
        edge = NewEdge(vertexCoordinates[i - 1], vertexCoordinates[i + 1], 'black', true);
        group.append(edge);
    }
    // Render the group on the surface
    surface.draw(group);
}