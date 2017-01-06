import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import '../../public/App.css'
import logo from '../../images/HelloPantryRound_T.png'
// import { Grid, Row, Col, Image } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> } */}
        {this.props.children}

        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="login-button" >
          <div className="button-text">
            LOG IN
          </div>
        </div>

          <div className="signup-button">
            <div className="button-text">
              SIGN UP
            </div>
          </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(App);
