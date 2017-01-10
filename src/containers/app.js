import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import '../../public/App.css'
import '../../public/grid.css'
import logo from '../../images/HelloPantryRound_T.png'
import helloPantry from '../../images/helloPantry.png'
import { Grid, Row, Col, Image } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        {/* {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> } */}
        {this.props.children}

        <div className="section group">
          <div className="row">
            <div className="col span-1-of-2">
              <img className="helloPantry" src={helloPantry} alt="HelloPantry"/>
            </div>
          </div>

          <div className="row">
            <div className="col span-1-of-2">
              <img className="logo" src={logo} alt="Logo" />
            </div>

            <div className="col span-1-of-2 buttons">
              <div className="button-box">
                <a href="#" className="button">LOG IN</a>
              </div>
              <div className="button-box">
                <a href="#" className="button">SIGN UP</a>
              </div>

            </div>
          </div>
        </div>



        {/* <div className="header">

          <div className="headline">

          </div>

          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <a href="#" className="button">LOG IN</a>
          <a href="#" className="button">SIGN UP</a> */}

            {/* <div className="login-button" >
              <div className="button-text">
                LOG IN
              </div>
            </div>

            <div className="signup-button">
              <div className="button-text">
                SIGN UP
              </div>
            </div> */}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(App);
