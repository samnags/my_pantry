import React, { Component} from 'react'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantries } from '../actions/pantry'
import PantryCard from './pantry_card'

class Home extends Component {
  componentWillMount() {
    this.props.fetchPantries()
  }

  render() {
    if(this.props.pantries) {
        var pantries = this.props.pantries.map(pantry => {
          return <PantryCard key={pantry.id} pantry={pantry}/>
        })
      }

    return(
      <div>
        {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> }
        {this.props.children}
        {pantries}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    logged_in: state.session,
    pantries: state.pantry.pantries }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantries }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
