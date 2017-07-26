import React, { Component } from 'react';
import './Home.css';
import api from '../api';
import NewsSources from '../components/News-Sources';
import Aside from '../components/Aside';
import Test from '../components/Test';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      sources: []
    }
    this.getSources = this.getSources.bind(this);
  }

  async getSources(){
    let response = await api.getSources();
    this.setState({
      sources: response.sources
    })
  }

  componentDidMount(){
    this.getSources();
  }


  render() {
    return (
      <div className="App">
        <div className="row">
          <Test/>
          <NewsSources/>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default Home;
