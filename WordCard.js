import React, { Component } from 'react' ;
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = c => { 
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                let chars = _.shuffle(Array.from(this.state.word))
                this.setState({guess: [],chars : chars, attempt: this.state.attempt + 1})
            }
        }
    }
    render(){
        return (
            <div>
                <h2>ROUND : {this.state.attempt}</h2>
                <h3>Hint  H********D</h3>
                {Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} attempt={this.state.attempt}/>) }
                <p>{this.state.completed? 'YOU WIN' : ' '}</p>
                <p>{this.state.completed? 'This word is HELLOWORLD' : ' '}</p>
                <img src="https://image.dek-d.com/25/2706414/109121227" height="350" width="300"></img>
                <p>Nannaphat Sirinual 6010110190 sec01</p>
            </div>
        );
    }
}