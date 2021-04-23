
import { Circle, geometry, Group, Text } from '@progress/kendo-drawing';
const { Circle: GeomCircle } = geometry;

export function SmallCircle(center, value, radius, color) {

    let font = {
        fill: {
            color: 'yellow'

        },
        font: `bold 17px Arial`
    }

    const group = new Group();
    var val = new Text(value, center, font);

    var circle = new Circle(new GeomCircle(center, radius), {
        fill: {
            color: color,
        }
    })

    group.append(circle, val);
    return group;
}