import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Indonesia from '../Pages/Indonesia';
  import Provinsi from '../Pages/Provinsi';
  import Internasional from '../Pages/Internasional';
const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route  exact path="/">
                <Indonesia />
            </Route>
            <Route path="/Indonesia">
                <Indonesia />
            </Route>
            <Route path="/Provinsi">
                <Provinsi/>
            </Route>
            <Route path="/Internasional">
                <Internasional/>
            </Route>
        </Switch>
        </Router>
    )
}

export default Routes