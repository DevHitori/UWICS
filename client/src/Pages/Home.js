import React from 'react';
import axios from 'axios'
import logo from '../img/logo.svg';
import { Progress,Message,Icon  } from 'semantic-ui-react'
import './Home.css';
import DesktopContainer from '../Components/HomepageLayout';
import './nextparticle.js';




export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }

  }

  async componentDidMount() {

  }


  render() {
        return (
          <div className="App">
          <div className="logoHolder">
          <img
          id="logo"
          className="next-particle"
          src="./z.png"
          />
          </div>
          <DesktopContainer/>
          </div>
        );
      }



}
