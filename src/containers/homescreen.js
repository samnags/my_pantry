import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../../images/HelloPantryRound_T.png'
import helloPantry from '../../images/helloPantry.png'
import Login from '../containers/login'
import SignUp from '../containers/sign_up'

class HomeScreen extends Component {
  constructor() {
    super()

    this.state = {
      login: false,
      signup: false
    }

    this.loginClick = this.loginClick.bind(this)
    this.signUpClick = this.signUpClick.bind(this)

  }

  loginClick() {
    this.setState(
      { login: !this.state.login }
    )
  }

  signUpClick() {
    this.setState(
      { signup: !this.state.signup }
    )
  }

  render() {
    return (
      <div className="homepage">
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
                <a href="#" className="button" onClick={this.loginClick}>LOGIN</a>
              </div>

              {this.state.login ? <Login /> : null }

              <div className="button-box">
                <a href="#" className="button" onClick={this.signUpClick}>SIGN UP</a>
              </div>

              {this.state.signup ? <SignUp /> : null }
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
