import "../Utils/Font.css"
import { helperHighlight } from "./helperHighlight"

export default function HuffmanCodeProblem(props) {

    helperHighlight(props.id, 9)

    return (
        <div>
            <h4 className="Heading"> Problem </h4>
            <p className="paragraph"> A greedy algorithm that constructs an optimal prefix code called,
            Huffman code.Assume that "C" is a set of "n" characters and
            that each character "c" in "C" is an object with an attribute "c:freq" giving its frequency.
            The algorithm builds the tree "T" corresponding to the optimal code in a bottom-up
            manner with the help of  min-priority queue "Q".  </p>

            <div className="code">
                <p id={0}>{"HUFFMAN (C)"}</p>
                <p id={1}>{"1. "}<span className="tab" />{"n = |C| "}</p>
                <p id={2}>{"2. "}<span className="tab" />{"Q = C "}</p>
                <p id={3}>{"3. "}<span className="tab" />{"for i = 1 to n-1"}</p>
                <p id={4}>{"4. "}<span className="tab" /><span className="tab" />{"allocate a new node z"}</p>
                <p id={5}>{"5. "}<span className="tab" /><span className="tab" />{"z.left = x = EXTRACT-MIN(Q)"}</p>
                <p id={6}>{"6. "}<span className="tab" /><span className="tab" />{"z.right = y = EXTRACT-MIN(Q)"}</p>
                <p id={7}>{"7. "}<span className="tab" /><span className="tab" />{"z.freq = x.freq + y.freq"}</p>
                <p id={8}>{"8. "}<span className="tab" /><span className="tab" />{"INSERT(Q,z)"}</p>
                <p id={9}>{"9. "}<span className="tab" />{"return EXTRACT-MIN(Q) "}</p>
            </div>
        </div>
    )
}

/**
 * H UFFMAN .C /
1 n D jC j
2 Q D C
3 for i D 1 to n  1
4
allocate a new node  ́
5
 ́:left D x D E XTRACT -M IN .Q/
6
 ́:right D y D E XTRACT -M IN .Q/
7
 ́:freq D x:freq C y:freq
8
I NSERT .Q;  ́/
// return the root of the tree
9 return E XTRACT -M IN .Q/
 */