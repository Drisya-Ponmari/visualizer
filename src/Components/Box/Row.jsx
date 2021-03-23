export default function Row(props) {

    let val = props.value;
    let wt = props.weight;
    if (props.color === "white") {
        val = "";
        wt = "";
    }

    return (
        <tr key={props.i} style={{ height: props.height, background: props.color, transition: 'all 1s ease' }}>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>{val}</p>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>{wt}</p>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '20px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>{props.i + 1}</p>
        </tr>
    )
}