import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import dragon from "./dragon.json";
import "./App.css";
  /**
   * Set initial State
   */
class App extends Component {
  state = {
    dragon,
    clickedDragon: [],
    score: 0,
    msg: "Click an image to begin!"
  };

//when you click on a card ... the dragon is taken out of the array
  imageClick = event => {
    const currentDragon = event.target.alt;
    const dragonAlreadyClicked =
      this.state.clickedDragon.indexOf(currentDragon) > -1;

    //if you click on a dragon that has already been selected, the game is reset and cards reordered
    if (dragonAlreadyClicked) {
      this.setState({
        dragon: this.state.dragon.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDragon: [],
        score: 0,

        msg: "You guessed incorrectly! Try again!"
      });

  /**
   * if image available, score is increased and cards reordered
   */
      } else {
      this.setState(
        {
          dragon: this.state.dragon.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedDragon: this.state.clickedDragon.concat(
            currentDragon
          ),
          score: this.state.score + 1,
          
          msg: "You guessed correctly!!"
          
        },
  /**
   * Reset Game
   * if you get all 12
   */

        () => {
          if (this.state.score === 12) {
              this.setState({
              dragon: this.state.dragon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedDragon: [],
              score: 0,
              msg: "You win!"
            });
          }
        }
      );
    }
  };

// components to be rendered: navbar, Header,Imagecard 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          msg={this.state.msg}
        />
  
         <Header />
       
        <div className="wrapper">
          {this.state.dragon.map(dragon => (
            <ImageCard
              imageClick={this.imageClick}
              id={dragon.id}
              key={dragon.id}
              image={dragon.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;