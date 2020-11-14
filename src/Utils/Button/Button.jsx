import React from 'react'
import '../../Styles/Font.css'
import '../../Styles/Button.css'

function Button(props){
    return(<button class = "smallbutton" >
        <div class="titlefont"> {props.title}</div>
    </button>);
}

export default Button