import React from "react";

// props.children is the click item from Game.js
const Container = (props) => {
    return (
        <main className= "container">
         {props.children}
        </main>
    )
}

export default Container;