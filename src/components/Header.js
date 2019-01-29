import React from "react";

const Header = (props) => {
    return (
        <header className= "header">
            <h1>Score: {props.score}</h1>
            <h1>Top Score: {props.topScore}</h1>
            <h2>Clicky Game</h2>
            <h3>Don't click on the same image twice!</h3>
        </header>
    )
}

export default Header