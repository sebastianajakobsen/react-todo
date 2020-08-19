import React from 'react';
import {Link} from "react-router-dom";

// Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.
// Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.
// React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// There is no render method used in functional components.
// These are mainly responsible for UI and are typically presentational only (For example, a Button component).
// Functional components can accept and use props.
// Functional components should be favored if you do not need to make use of React state.

function Header() {
    return (
        <header>
            <h1 className=" font-black text-2xl mb-4">TodoList</h1>

            <ul className="flex m-2 justify-center">
                <li className="mr-6">
                    <Link to="/" className="text-blue-500 hover:text-blue-800">Home</Link>
                </li>
                <li className="mr-6">
                    <Link to="/about" className="text-blue-500 hover:text-blue-800">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;