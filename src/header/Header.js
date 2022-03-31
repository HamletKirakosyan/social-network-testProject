import { useEffect, useState } from "react";
import "./header.css"

export default function Header() {
    const [state, setState] =  useState(0);
    const [increment, setIncrement] =  useState(0);
    const [decrement, setDecrement] =  useState(0);

    function onAdd() {
        increment++;
        setIncrement(increment)
    }

    function onSubstring() {
        decrement--;
        setDecrement(decrement);
    }

    return (
        <div className="header">
            <button className="headerbutton">News</button>
            <button className="headerbutton">Messages</button>
            <button className="headerbutton">Friends</button>
            <button className="headerbutton">Profile</button>
            <button className="headerbutton">Login/out svg</button>
        </div>
    )
}