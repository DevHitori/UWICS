import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }

  }

  async componentDidMount() {
    this.setState({data: res.data.success});
  }


  render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload!
                  {this.state.data}
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
          </header>
        </div>
        );
      }



}
