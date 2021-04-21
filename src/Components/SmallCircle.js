
import { Circle, geometry, Group, Text } from '@progress/kendo-drawing';
const { Circle: GeomCircle } = geometry;

export function SmallCircle(center, value, radius) {

    let font = {
        fill: {
            color: 'white',
            size: 100,
        }
    }

    const group = new Group();
    var val = new Text(value, center, font);

    var circle = new Circle(new GeomCircle(center, radius), {
        fill: {
            color: 'green'
        }
    })

    group.append(circle, val);
    return group;
}