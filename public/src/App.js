import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Nav, ListItem} from './components';
import {Home, About} from './pages';

/**
 *
 * *App is the entry point of this project
 *
 * @return {JSX.Element}
 */
function App() {
  return (
    <div className="App">
      <Nav>
        <ListItem className="home" to="#Home">Home</ListItem>
        <ListItem to="#About" className="about">About</ListItem>
      </Nav>
      <section>
        <div></div>
        <Home/>
        <About/>
      </section>
    </div>
  );
}

export default App;
