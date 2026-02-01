import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="container navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand navbar-txt-bg" to={'/'}>Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-2">
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-txt" aria-current="page" to={'about'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-txt" to={'portfolio'}>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-txt" to={'contact'}>Conatct</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
    

    </>
  );
}
