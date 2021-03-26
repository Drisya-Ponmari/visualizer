import IntegralKnapSackSubprob from "../../Container/Subprobs/IntegralKnapSackSubprob"
import "../../Utils/Font.css"
function Subproblem(props) {
    console.log(props.data)
    return (

        < div >
            <h1 className="label heading">Sub Problems </h1>
            <IntegralKnapSackSubprob data={props.data} />
        </div >

    );
}

export default Subproblem;