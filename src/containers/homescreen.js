import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../public/App.css'
import '../../public/grid.css'
import logo from '../../images/HelloPantryRound_T.png'
import helloPantry from '../../images/helloPantry.png'
import { Link } from 'react-router'


class HomeScreen extends Component {
  render() {
    console.log("homescreen loaded")
    return (
      <div>
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
                <Link to='/login' className="button">LOGIN</Link>
              </div>
              <div className="button-box">
                <Link to='/signup' className="button">SIGN UP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(HomeScreen);
