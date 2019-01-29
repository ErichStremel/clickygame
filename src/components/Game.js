import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import ClickItem from "./ClickItem";
import data from "../data1.json";

class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) })
        console.log(data);
        console.log(typeof data)
    };

    handleCorrectGuess = (newData) => {
        const topScore = this.state.topScore;
        const score = this.state.score;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore)
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        })
    };

    handleIncorrectGuess = (data) => {
        this.setState({
            data: this.resetData(data),
            score: 0
        })
    };

    resetData = (data) => {
        // mapping through the array and resetting all items to false
        const resetData = data.map(item => ({ ...item, clicked: false }));

        return this.shuffleData(resetData)
    };

    shuffleData = (data) => {
        // looping through the data array and reassign the index numbers in order to shuffle
        for (var i = 0; i < data.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            // assigning temp to the current index, then setting it equal to the random index in order to shuffle, then temp is now assigned to the new random index number
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    };

    handleItemClick = (id) => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item }
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;

                }
            }
            return newItem
        })
        guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData)
    };

    render() {
        return (
            <div>
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Container>
                    {this.state.data.map(item => (
                        <ClickItem
                            key={item.id}
                            id={item.id}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;