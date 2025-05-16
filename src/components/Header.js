import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css"

function Header(){
    return(
        <>
            <div className="header desktop">
                <header>
                    <nav>
                        <Link to= "/">Home</Link>
                        <Link to= "/intro">Intro</Link>
                        <Link to= "/project">Project</Link>
                        <Link to= "/design">3d Art</Link>
                        <Link to= "/contact">Contact</Link>
                        
                    </nav>
                </header>
            </div>
            <div className="header phone">
                <header>
                    <nav>
                        <Link to= "/">Home</Link>
                        <Link to= "/intro">Intro</Link>
                        <Link to= "/project">Project</Link>
                        <Link to= "/design">3d Art</Link>
                        <Link to= "/contact">Contact</Link>
                        
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header;

