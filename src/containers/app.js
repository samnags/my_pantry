import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../public/app.css'
import '../../public/grid.css'
import LoggedInHeader from '../components/logged_in_header'
import GuestHeader from '../components/guest_header'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> }
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(App);
