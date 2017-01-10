import React, { Component } from 'react';
// import { connect } from 'react-redux'
import '../../public/App.css'
import '../../public/grid.css'

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { logged_in: state.session }
// }

// export default connect(mapStateToProps)(App);
