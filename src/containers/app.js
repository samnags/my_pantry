import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import '../../public/App.css'
import logo from '../../images/HelloPantryRound_T.png'
import helloPantry from '../../images/helloPantry.png'
import { Grid, Row, Col, Image } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        {/* {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> } */}
        {this.props.children}
        <Grid>
          <Row>
            <Col md={4} mdPush={2}>
              <img className="helloPantry" src={helloPantry} alt="HelloPantry"/>
            </Col>
          </Row>

          <Row>
            <Col className="center" md={4} mdOffset={4}>
              <img className="logo" src={logo} alt="Logo" />
            </Col>
          </Row>



        </Grid>



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
