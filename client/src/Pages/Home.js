import React from 'react';
import axios from 'axios'
import logo from '../img/logo.svg';
import { Progress,Message,Icon  } from 'semantic-ui-react'
import './Home.css';
import DesktopContainer from '../Components/HomepageLayout';



const items = [
  'This Website is still in development',
  'Date initiated: 20/07/2019 :: 12:02 AM ',
]

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
          <DesktopContainer/>
        </div>
        );
      }



}
