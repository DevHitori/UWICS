import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Team from './Pages/Team';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FAq from './Pages/faq';

class Routes extends Component {
 render() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/faq' component={FAq} />
         <Redirect to="/" />
      </Switch>
    </div>
    )
  }
}
export default Routes;
