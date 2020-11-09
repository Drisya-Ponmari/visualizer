import React from 'react'
import './Header.css'
import '../../Styles/Font.css'

function Header(props){
    
    console.log(props)
    return(<div>
        <header>
            <h4 class = "titlefont">{props.title}</h4>
        </header>
        </div>);
}

export default Header