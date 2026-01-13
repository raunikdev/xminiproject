import { useState } from 'react';
import './css/Header.css';
function Header({Login, setLogin}) {

    return (
        <header>
            <a href="/">
                <p>
                    Mini projects by me
                </p>
            </a>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li className="login-button"
                    onClick={()=>setLogin(!Login)}
                    style={{color:Login?'green':'red'}}>
                    {Login ? "Logged In!" : "Not Logged in"}
                </li>
            </ul>
        </header>
    )
}
export default Header;