import "../../Utils/Font.css"
export default function STring(props) {
    return (
        <div>
            <div className="mediumFont">
                <span className="equation">{props.index}. </span>
                {props.sTring}
            </div>
        </div>
    )
}