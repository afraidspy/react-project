import React, {Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponents';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
