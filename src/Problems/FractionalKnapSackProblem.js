
import "../Utils/Font.css"

function FractionalKnapSackProblem(props) {


    if (props.id !== null) {
        for (let i = 1; i < 14; i++) {
            if (document.getElementById(i) != null)
                document.getElementById(i).className = ""
        }

        for (let i = 0; i < props.id.length; i++) {

            if (document.getElementById(props.id[i]) != null) {

                document.getElementById(props.id[i]).className = "highlight"
            }
        }
    }
    return (
        <div>
            <h4 className="Heading">Problem</h4>
            <p className="paragraph">Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.Here we are allowed to take the fraction of item</p>

            <div className="code">
                <p id={1}>{"1.Fractional-KnapSack( p , w, n ,W){"}</p>
                <p id={2}>{"2."}<span className="tab" />{"Sort p & w with desending (p(1..n)/ w(1..n))"}</p>
                <p id={3}>{"3."}<span className="tab" />{"totalValue = 0"}</p>
                <p id={4}>{"4."}<span className="tab" />{"for ( i = 0 to n ) {"}</p>
                <p id={5}>{"5."}<span className="tab" /><span className="tab" /><span className="tab" />{"if ( W - w(i) >= 0)"}</p>
                <p id={6}>{"6."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"totalValue += v(i)"}</p>
                <p id={7}>{"7."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"W -= w(i)"}</p>
                <p id={8}>{"8."}<span className="tab" /><span className="tab" /><span className="tab" />{"else"}</p>
                <p id={9}>{"9."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"fraction = W / w(j)"}</p>
                <p id={10}>{"10."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"totalValue += ( fraction * v(i) )"}</p>
                <p id={11}>{"11."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"W -= ( fraction * w(i) )"}</p>
                <p id={12}>{"12."}<span className="tab" />{"}"}</p>
                <p id={13}>{"13."}<span className="tab">{" return totalValue;"}</span></p>
                <p id={14}>{"14."}<span className="tab" />{"}"}</p>

            </div>
        </div>
    )
}

export default FractionalKnapSackProblem;