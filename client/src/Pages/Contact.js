import React from 'react';
import axios from 'axios'
import faker from 'faker'
import './Contact.css';
import { Segment,Image,Icon,Message  } from 'semantic-ui-react'
import MenuBar from '../Components/MenuBar';

const phone = [
  'Leonardo Garcia | W.I | +1 (868) 758-6096',
]

const address = [
  'Leonardo Garcia (Personnel) | 4 Ryan Street, San Jaun Trinidad',
]

const emails = [
  'safehouse.dshs@gmail.com',
  'sgarciadshs@gmail.com',
  'cgarciadshs@gmail.com',
]

const icons = [
  'phone square',
  'home',
  'mail',
]


export default class About extends React.Component {
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
        <div className="contactPage">
        <MenuBar/>
          <div className="contactDiv">
            <h1 className="contactTitle">Need To Contact Us?</h1>

            <div className="contactsInfo" style={{position:'absolute',bottom:'0%'}}>
            {icons.map( (eq, i)=>{
              return (i==0) ? (
                <div className="contactInfoContainer">
                <br/>
                <div className="contactsIcon">
                  <Icon name={eq} size='massive' inverted/>
                  </div>
                  <div className="contactsList" style={{marginTop:'7%',fontSize:'15px'}}>
                  {phone.map( (phoneNum, i)=>{
                    return (
                      <li>{phoneNum}</li>
                    )
                  })}
                </div>
                </div>

              ) : (i==1) ? (
                <div className="contactInfoContainer">
                <br/>
                <div className="contactsIcon">
                  <Icon name={eq} size='massive' inverted/>
                  </div>
                  <div className="contactsList" style={{marginTop:'7%',fontSize:'15px'}}>
                  {address.map( (phoneNum, i)=>{
                    return (
                      <li>{phoneNum}</li>
                    )
                  })}
                  </div>
                </div>
              ) : (
                <div className="contactInfoContainer">
                <br/>
                <div className="contactsIcon">
                  <Icon name={eq} size='massive' inverted/>
                  </div>
                  <div className="contactsList" style={{marginTop:'5%',fontSize:'15px'}}>
                  {emails.map( (phoneNum, i)=>{
                    return (
                      <li>{phoneNum}</li>
                    )
                  })}
                  </div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
        );
      }


}
