import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/app';
import SignUp from './containers/sign_up'
import Login from './containers/login'
import Home from './containers/home'
import HomeScreen from './containers/homescreen'
// import Index from './containers/index'
import NewPantry from './containers/new_pantry'
// import PantryCard from './components/pantry_card'
import Pantry from './containers/pantry'
import NewIngredient from './containers/new_ingredient'


const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeScreen} />
    <Route path="/home" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/newpantry" component={NewPantry} />
    <Route path="/pantries/:id" component={Pantry} />
    <Route path="/add_ingredient" component={NewIngredient} />
  </Route>
)

module.exports = Routes
