
import "../Utils/Font.css"
export default function IntegralKnapSack(props) {

    console.log(props)
    if (props.id !== null) {
        for (let i = 1; i < 14; i++)
            document.getElementById(i).className = ""
        for (let i = 0; i < props.id.length; i++)
            document.getElementById(props.id[i]).className = "highlight"
    }
    return (
        <div>
            <h4 className="Heading">Problem</h4>
            <p className="paragraph">Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack</p>

            <div className="code">
                <p id={1}>{"1.KnapSack( v , w, n ,W){"}</p>
                <p id={2}>{"2."}<span className="tab" />{"for ( i = 1 to n){"}</p>
                <p id={3}>{"3."}<span className="tab" /><span className="tab" />{"for ( 1 t o W){"}</p>
                <p id={4}>{"4."}<span className="tab" /><span className="tab" /><span className="tab" />{"if (i === 0 || j === 0)"}</p>
                <p id={5}>{"5."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"dp[i][j] = 0;"}</p>
                <p id={6}>{"6."}<span className="tab" /><span className="tab" /><span className="tab" />{"else if ( w[ i ] <= j )"}</p>
                <p id={7}>{"7."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"dp [ i , j ] = max ( dp [ i − 1 , j ] , dp [ i −1 , w − w[i] ] );"}</p>
                <p id={8}>{"8."}<span className="tab" /><span className="tab" /><span className="tab" />{"else"}</p>
                <p id={9}>{"9."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"dp [ i , j ] = dp [ i−1 , j ];"}</p>
                <p id={10}>{"10."}<span className="tab" /><span className="tab" /><span className="tab" />{"}"}</p>
                <p id={11}>{"11."}<span className="tab" /><span className="tab" />{"}"}</p>
                <p id={12}>{"12."}<span className="tab">{"return dp[ n , W ];"}</span></p>
                <p id={13}>{"13."}<span className="tab" />{"}"}</p>

            </div>
        </div>
    )
}