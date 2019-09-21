import React, { Component } from 'react' ;
import './App.css';
// import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Helloworld";
class App extends Component {
  render() {
    return (
      <div className="App">
        <WordCard value="Helloworld"/>
      </div>
    );
  }
}
export default App;