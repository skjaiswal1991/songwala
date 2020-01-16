import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Home from './view/songs/songs';
import Songdeatils from './view/songs/songdetails';
import Layout from './layout';

const AppRoute = ({component:Component,layout:Layout,...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)


function App() {
  return (
    <div className="App">	
        <Router>
              <AppRoute exact path="/" component={Home} layout={Layout} />              
              <AppRoute exact path="/songdetails/:id" component={Songdeatils} layout={Layout} />              
              
        </Router>
    </div>
      	  
         
  );
}

export default App;
