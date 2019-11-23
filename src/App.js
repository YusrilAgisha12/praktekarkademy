import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from './landing';

class App extends Component{
   render(){
     return(
       <BrowserRouter>
       <switch>
        <Route path="/"></Route>
        <Landing></Landing>
       </switch>
       </BrowserRouter>
     )
   }
}



export default App;