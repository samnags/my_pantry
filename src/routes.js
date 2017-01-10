import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/app';
import SignUp from './components/sign_up'
import Login from './components/login'
import Home from './components/home'
import HomeScreen from './containers/homescreen'
// import Index from './containers/index'
import NewPantry from './components/new_pantry'
// import PantryCard from './components/pantry_card'
import Pantry from './components/pantry'
import NewIngredient from './components/new_ingredient'


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
