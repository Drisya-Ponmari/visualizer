
import { Circle, geometry, Group, Text } from '@progress/kendo-drawing';
const { Circle: GeomCircle } = geometry;

export function NewCircle(center, value) {

    var sz = value.length;
    var colour, radius, heading, cap, val, weight;
    var left = 60, right = 10;
    let x = {
        fill: {
            color: 'red'
        }
    };
    if (sz === 2) {
        colour = 'red';
        radius = 20;
        heading = new Text("Item", [center[0] - 30, center[1] - 30]);
        cap = new Text("", center);
        val = new Text("Value: " + value[0], [center[0] - left, center[1] - 10]);
        weight = new Text("Weight: " + value[1], [center[0] - left, center[1] + 10]);
    } else {
        colour = 'green';
        radius = 50;
        heading = new Text("KnapSack", [center[0], center[1] - 40]);
        cap = new Text("Capacity: " + String(value[0]), [center[0] + right, center[1]]);
        val = new Text("Value: " + String(value[1]), [center[0] + right, center[1] + 30], x);
        weight = new Text("", center);
    }
    const group = new Group();
    var circle = new Circle(new GeomCircle(center, radius), {
        fill: {
            color: colour
        }
    });

    //  const text = new Text(text2, text3,);
    group.append(circle, heading, cap, val, weight);
    return group;


}