import STring from "./STring"
import "../../Utils/Label.css"
export default function StringArray(props) {

    return (
        <div >
            <br />
            <label className="label heading">{props.title}</label><br />
            <br />
            <table style={{ textAlign: props.align }}>
                <tbody>
                    {
                        props.array.map((sTring, i) => (<STring sTring={sTring} index={i} />))

                    }</tbody>
            </table>

        </div>
    )
}