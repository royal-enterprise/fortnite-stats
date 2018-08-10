import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = 'a6defb3f-aeab-4851-a0af-a4510039ca1b';
const FORTNITE_URL = 'https://api.fortnitetracker.com/v1/profile/pc/noojabes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get(FORTNITE_URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'TRN-Api-Key': API_KEY
      }
    }).then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>This is a button</button>
      </div>
    )
  }
}
