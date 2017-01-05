import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import '../../public/App.css'
import logo from '../../images/HelloPantryRound_T.png'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Grid> */}
        {/* {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> } */}
        {this.props.children}
        {/* <Row> */}
          {/* <Col sm={6} md={3}> */}
          <img src={logo} alt="Logo" className="logo" />
          {/* </Col>
        </Row>
        </Grid> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(App);
