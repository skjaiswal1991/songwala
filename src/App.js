import React from 'react';
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


function App() {
  return (
    <div className="App">	
        <Router>
              <Route exact path="/" component={Home} />
              <Route  path="/songdetails" component={Songdeatils} />
        </Router>
    </div>
      	  
         
  );
}

export default App;
