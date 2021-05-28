/**
 * @author Drisya Ponmari 
 */
import "../Utils/Font.css"
import { helperHighlight } from "./helperHighlight"
/**
 * @component IntegralKnapSakProblem 
 * @description Functional component for showing the problem statement and psuedo code of Integral Knapsack
 * @param {object} props includes line 'id' of the psuedo code to be highlighted
 * @returns corresponding jsx code to show problem statement and psuedocode with the current step highlighted
 * */
function IntegralKnapSackProblem(props) {

    helperHighlight(props.id, 14);
    return (
        <div>
            <h4 className="Heading">Problem</h4>
            <p className="paragraph">Given weights and profits of n objects, put these items in a knapsack of capacity W to get the maximum total profit in the knapsack</p>

            <div className="code">
                <p id={1}>{"1.KnapSack( p , w, n ,W){"}</p>
                <p id={2}>{"2."}<span className="tab" />{"for ( i = 0 to n) {"}</p>
                <p id={3}>{"3."}<span className="tab" /><span className="tab" />{"for ( j = 0 to W ) {"}</p>
                <p id={4}>{"4."}<span className="tab" /><span className="tab" /><span className="tab" />{"if ( i == 0 or j == 0 )"}</p>
                <p id={5}>{"5."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"opt [ i , j ] = 0;"}</p>
                <p id={6}>{"6."}<span className="tab" /><span className="tab" /><span className="tab" />{"else if ( w (Oi)  <= j )"}</p>
                <p id={7}>{"7."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"opt [ i , j ] = max ( p (Oi)  + opt [ i −1 , j − w (Oi) ] , opt [ i − 1 , j ] );"}</p>
                <p id={8}>{"8."}<span className="tab" /><span className="tab" /><span className="tab" />{"else"}</p>
                <p id={9}>{"9."}<span className="tab" /><span className="tab" /><span className="tab" /><span className="tab" />{"opt [ i , j ] = opt [ i − 1 , j ];"}</p>
                <p id={10}>{"10."}<span className="tab" /><span className="tab" /><span className="tab" />{"}"}</p>
                <p id={11}>{"11."}<span className="tab" /><span className="tab" />{"}"}</p>
                <p id={12}>{"12."}<span className="tab">{" return opt [ n , W ];"}</span></p>
                <p id={13}>{"13."}<span className="tab" />{"}"}</p>

            </div>
        </div>
    )
}

export default IntegralKnapSackProblem;