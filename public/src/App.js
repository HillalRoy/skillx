import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Nav, ListItem} from './components/nav';
import {Home, About} from './pages';

/**
 * @return {JSX}
 */
function App() {
  return (
    <div className="App">
      <Nav>
        <ListItem to="#Home">Home</ListItem>
        <ListItem to="#About">About</ListItem>
      </Nav>
      <section>
        <div></div>
        <Home />
        <About/>
      </section>
    </div>
  );
}

export default App;
