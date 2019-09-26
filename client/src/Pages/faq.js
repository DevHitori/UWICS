import React from 'react';
import axios from 'axios'
import faker from 'faker'
import './faq.css';
import { Accordion,Icon,Segment,Grid  } from 'semantic-ui-react'
import MenuBar from '../Components/MenuBar';

const panels = [
  {
    key: '1',
    title: 'Do we accept TTD or USD?',
    content: [
      'Transactions can be made in any currency of your choosing',
      ', therefore we accept both TTD and USD',
    ].join(' '),
  },
  {
    key: '2',
    title: 'Would I be able to make refunds?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },
  {
    key: '3',
    title: 'May I have a quotation for scaffolding?',
    content: [
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
      'guest in many households across the world.',
    ].join(' '),
  },
  {
    key: '4',
    title: 'Do you rent wheel chairs for specfic period of time?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },
  {
    key: '5',
    title: 'Do you gurneys for a specfic period of time?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },{
    key: '6',
    title: 'Would I be able to have a geriatric nurse on a month to month basis?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },
  {
    key: '7',
    title: 'Would I be able to get a handy man to come a couple days a week to clean the yard and wash my car?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },
  {
    key: '8',
    title: 'Do you do custom design furniture?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  },
  {
    key: '9',
    title: 'Do you provide nursing attire?',
    content: [
      'Answer',
      'Undefined',
    ].join(' '),
  }
]


const AccordionExampleStandardShorthand = () => (
  <Segment inverted>
    <Accordion inverted defaultActiveIndex={0} panels={panels} />
  </Segment>
)


export default class faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      activeIndex: null
    }

    this.handleClick = this.handleClick.bind(this)

  }

  async componentDidMount() {
    let res = await axios.get('/users');
    console.log(res.data);
    this.setState({data: res.data.success});
  }

  handleClick = (e, titleProps) => {
     const { index } = titleProps
     const { activeIndex } = this.state
     const newIndex = activeIndex === index ? -1 : index

     this.setState({ activeIndex: newIndex })
   }


  render() {

    const {activeIndex} = this.state
      return (
        <div className="faqPage">
        <MenuBar/>
          <div className="faqDiv">
          <h1 className='faqTitle'>Frequently Asked Questions</h1>
          <div className="questionsDivRight">
          {panels.map( (question,i) =>{
            return (i%2!=0) ? (
            <Segment inverted>
              <Accordion inverted>
              <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                {question.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === i}>
                <p>
                {question.content}
                </p>
                </Accordion.Content>
              </Accordion>
            </Segment> ) : null
          })}
          </div>
          <div className="questionsDivLeft">
          {panels.map( (question,i) =>{
            return (i%2==0) ? (
            <Segment inverted>
              <Accordion inverted>
              <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                {question.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === i}>
                <p>
                {question.content}
                </p>
                </Accordion.Content>
              </Accordion>
            </Segment> ) : null
          })}
          </div>
          </div>

          <footer style={{position:'absolute',bottom:'3vh',color:'white',marginLeft: '50%',transform: 'translateX(-50%)',zIndex:'9' }}>Copyright © 2014-2019 DSS Ltd All Rights Reserved. <a>Accessibility</a>, <a>User Agreement</a>, <a>Privacy</a> and <a>Cookies</a></footer>

        </div>
        );
      }



}
