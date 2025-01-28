
import './App.css';
import * as ReactDOM from "react-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
      
      />
        <Navbar/>
       
      <Routes>
     
      <Route exact path="/business"     element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="business" pageSize={5} country="us" category="business"/>}/>
      <Route exact path="/entertainment"element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="entertainment" pageSize={5} country="us" category="entertainment"/>}/>
      <Route exact path="/general"      element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="general"  pageSize={5} country="us" category="general"/>}/>
      <Route exact path="/health"       element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="health" pageSize={5} country="us" category="health"/>}/>
      <Route exact path="/science"      element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="science" pageSize={5} country="us" category="science"/>}/>
      <Route exact path="/sports"       element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="sports" pageSize={5} country="us" category="sports"/>}/>
      <Route exact path="/technology"   element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="technology" pageSize={5} country="us" category="technology"/>}/>
      </Routes>
    </Router>
      </>
    
    )
  }
}

// exact keyword se exact location pe jaakr match krtaa haii . and ye lga kr u will need to pass a unique key taaki chle .



