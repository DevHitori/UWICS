import React from 'react';
import { Input, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import logo from '../img/headerphotoshoped2.png'
import './MenuBar.css';

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: null
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name }); }

  async componentDidMount() {
    this.setState({activeItem: window.location.pathname.slice(1)});
  }

  render(){
    const { activeItem } = this.state

    return(
      <div style={{color:"white"}}>
      <Link to="/"><img className="logo" src={logo}/></Link>
      <Menu size='huge' text className="menuBar">
        <Link to="/">
          <Menu.Item
          name='Home'
          className="menLink"
          style={{color:"white",transition:"0.5s ease"}}
          active={activeItem === 'Home' || activeItem == ''}
          onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/Products">
          <Menu.Item
          name='Products'
          className="menLink"
          style={{color:"white",transition:"0.5s ease"}}
          active={activeItem === 'Products'}
          onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/About">
          <Menu.Item
          name='About Us'
          className="menLink"
          style={{color:"white",transition:"0.5s ease"}}
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/Contact">
          <Menu.Item
          name='Contact'
          className="menLink"
          style={{color:"white",transition:"0.5s ease"}}
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/FAQ">
          <Menu.Item
          name='FAQ'
          className="menLink"
          style={{color:"white",transition:"0.5s ease"}}
          active={activeItem === 'FAQ'}
          onClick={this.handleItemClick}
          />
        </Link>

</Menu>


</div>
    )

  }

}
