import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Homepage = () => (<div>Homepage</div>);
const Login = () => (<div>Login</div>);
const Reservation = () => (<div>Reservation</div>);

const SwitchDemo = () =>(
  <Switch>
    <Route exact path="/" componenet={Homepage}/>
    <Route exact path="/login" componenet={Login}/>
    <Route exact path="/reservation" componenet={Reservation}/>
  </Switch>
);

export default SwitchDemo;
