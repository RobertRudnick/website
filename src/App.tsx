import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import AboutSection from './components/About/AboutSection';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <div>
            <h4>Bored already? Play some tic tac toe!</h4>
            <TicTacToe />
        </div>
    </div>
  );
}

export default App;
