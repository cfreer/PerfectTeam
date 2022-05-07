import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">Create a Team</Link>
            </li>
            <li>
                <Link to="/">Games</Link>
            </li>
            <li>
                <Link to="/">Teams</Link>
            </li>
            <li>
                <Link to="/">Players</Link>
            </li>
        </div>
    )
}

export default navbar;