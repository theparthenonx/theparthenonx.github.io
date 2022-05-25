import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

//pages
import Home from "./Home";
import Consulting from "./consulting";

  const Root = () =>{
      return (
        <Router>
            {/* <Switch> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/consulting" component={Consulting} />
            {/* </Switch> */}
        </Router>
      )
  }

export default Root;