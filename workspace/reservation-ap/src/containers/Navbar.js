import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component{
  render(){
    return(
      //creatin navbar and styling with bootstrap
      <nav className = "navbar navbar-expand">
        <div className = "container-fluid">
          <Link to = "/" className = "navbar-brand">
            <img src = "" alt = "Home page"/>
          </Link>
        </div>
        <ul className = "nav navbar-nav navbar-right">
          <li>
            <Link to = "signup">signup</Link>
          </li>
          <li>
            <Link to = "signin">signin</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  };
}
export default connect(mapStateToProps,null)(Navbar);