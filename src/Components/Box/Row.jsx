export default function Row(props) {

    let val = props.value;
    let wt = props.weight;
    if (props.color === "white") {
        val = "";
        wt = "";
    }

    return (
        <tr key={props.i} style={{ height: props.height, background: props.color, transition: 'all 2s ease' }}>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '15px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>Item: {props.i + 1}</p>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '15px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>Value : {val}</p>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '15px', alignItems: 'middle', justifyContent: 'middle', verticalAlign: 'middle' }}>Weight: {wt}</p>
        </tr>
    )
}