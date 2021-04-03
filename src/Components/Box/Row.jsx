export default function Row(props) {

    let val = props.value;
    let wt = props.weight;
    if (props.color === "white") {
        val = "";
        wt = "0";
    }


    return (

        <tr key={props.i} style={{ height: props.height, background: props.color }}>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '15px' }}>Item: {props.i + 1}, profitByweight:{(val / wt).toFixed(2)}</p>
        </tr>
    )
}