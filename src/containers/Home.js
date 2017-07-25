import React, { Component } from 'react';
import './Home.css';
import api from '../api';
import Carousel from '../components/Carousel';
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
    console.log(response);
  }

  componentDidMount(){
    this.getSources();
  }


  render() {
    return (
      <div className="App">
      <Carousel/>
      <Test/>
      <div className="row">
      {
        this.state.sources.map((source)=>
        <div  key={source.id} className="col s12 m6">
          <div className="card grey lighten-4">
            <div className="card-content black-text">
              <span  className="card-title">{source.name}</span>
              <p>{source.description}</p>
            </div>
            <div className="card-action">
              <NavLink to={`/articles/${source.id}`}>{source.name}</NavLink>
            </div>
          </div>
        </div>
      )
      }
      <img src="http://www.revistamoi.com/wp-content/uploads/2017/02/rappi.jpg"/>
      </div>
      </div>
    );
  }
}

export default Home;
