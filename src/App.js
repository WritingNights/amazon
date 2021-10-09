import React from 'react';
import './App.css';

import Navbar from "./components/Navbar.js";
import Page from "./components/Page.js";
import StickyNav from './components/StickyNav';

let users = [
  {
    user: 'Daniel',
    city: 'Vista',
    zip: '92081'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border: false,
      sticky: false
    }
    this.scrollCheck = this.scrollCheck.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollCheck, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollCheck);
  }
  scrollCheck() {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 345) {
      this.setState({
        border: true,
        sticky: true
      });
    } else if (currentScroll > 150) {
      this.setState({
        border: true,
        sticky: false
      });
    } else {
      this.setState({
        border: false,
        sticky: false
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar user={users[0].user} city={users[0].city} zip={users[0].zip} />
        <StickyNav border={this.state.border} sticky={this.state.sticky} />
        <Page />
        {/*
                   _
               .__(.)< (MEOW)
                \___)
        ~~~~~~~~~~~~~~~~~~
        */}
      </div>
    );
  }
}

export default App;