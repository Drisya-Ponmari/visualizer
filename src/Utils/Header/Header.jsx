import React from 'react'
import './Header.css'
function Header(props) {

    console.log(props)
    return (<div>
        <header className="Header">
            {props.title}
        </header>
    </div>);
}

export default Header