/**
 * @author Drisya P
 */
import React from 'react'
import './Header.css'
/**
 * @component
 * @param {string} props title name 
 * @description Creates Header with title
 */
function Header(props) {

    console.log(props)
    return (<div>
        <header className="Header">
            {props.title}
        </header>
    </div>);
}

export default Header