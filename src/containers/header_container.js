import React, { Component} from 'react'
import { logout } from '../actions/signin'
import { fetchPantries } from '../actions/pantry'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import '../../public/app.css'
import logo from '../../images/HelloPantryRound_T.png'

class LoggedInHeader extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    this.props.fetchPantries()
  }

  renderPantries() {
    return this.props.pantries.map((pantry) => {
      return(
        <LinkContainer key={pantry.id} to={`/pantries/${pantry.id}`}>
         <NavItem>{pantry.location}</NavItem>
        </LinkContainer>
      )
    })
  }

  logout() {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    if (!this.props.pantries > 0) {
      return <div>Loading..</div>
    }

    return(
      <div className="section group header">
        <div className="row flush-left">
          <div className="col span-1-of-4">
            <Link to='/home'><img className="header-logo" src={logo} alt="Logo" /></Link>
          </div>
          <div className="col span-2-of-4">
              <Link className="header-link" to='/newpantry'>ADD A PANTRY</Link>
          </div>
          <div className="col span-1-of-4">
              <a href="#" className="header-link" onClick={this.logout}>LOG OUT</a>
          </div>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {pantries: state.pantry.pantries }
}

export default connect(mapStateToProps, { fetchPantries, logout })(LoggedInHeader)
