import React from 'react';
import axios from 'axios'
import faker from 'faker'
import './About.css';
import { Segment,Image,Icon  } from 'semantic-ui-react'
import MenuBar from '../Components/MenuBar';
import vicky from '../img/vicky.jpg'
import steven from '../img/steven.png'
import craig from '../img/craig.jpg'
import kyle from '../img/kyle.jpg'


export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }

  }



  render() {
      return (
        <div className="aboutPage">
        <MenuBar/>
          <div className="aboutDiv">



          <div className="aboutInfo">
            <p>We are a family of caring individuals who have many years of experience and qualifications in a diverse number of fields.</p>
          </div>

          <div className="aboutBox">
            <img src={vicky}/> <h3>Managing Director / Chairman</h3>
            <div className="aboutText" >
              <h2>Vicki-Ann Garcia. (General Management) </h2>
              <p>Mother of three (3) and eighteen (18) years experience in Fire and Gas Protection.
              Has a Bachelors Degree in Business Management and other Certifications in
              Project Management, Human Resource Management, Occupational Health and Safety, Disaster and Crisis Preparedness Management and also has a diploma in
              Business Administration. </p>
            </div>
          </div>


          <div className="aboutBox">
            <img src={steven}/> <h3>Director</h3>
            <div className="aboutText" >
              <h2>Steven Garcia (Manager of Procurement and Logistics)</h2>
              <p>Steven is an educator for the past ten (10) years who specialized in communicating with autistic children through music.
              Steven holds a Bachelors of Fine Arts in Music Performance and a Masters of Music in Classical Guitar Performance. </p>
            </div>
          </div>


          <div className="aboutBox">
            <img src={craig}/> <h3>Director</h3>
            <div className="aboutText" >
              <h2>Craig Garcia (Manager of Maintenance, Manufacturing and Sales)</h2>
              <p>Craig has seven (7) years experience as an Electrical Engineer in the field of Fire and Gas Prevention and Protection and is also a Licensed Electrician.</p>
            </div>
          </div>


          <div className="aboutBox">
            <img src={kyle}/> <h3>Director</h3>
            <div className="aboutText" >
              <h2>Leonardo Kyle Adam Garcia </h2><br/>
              <h2>(Manager of I.T. Networking/Human Resource/ Rental Services)</h2>
              <p>Leonardo has over ten (10) years experience as an I.T. Specialist and Consultant.
              He is qualified in Advance Computer Programming and has other certification in
              Occupational, Health and Safety, Human Resource Management and a Diploma in Disaster and Crisis Management. </p>
            </div>
          </div>



          </div>
        </div>
        );
      }



}
