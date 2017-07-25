import React, { Component } from 'react';
import api from '../api';
import { NavLink } from 'react-router-dom';

class Carousel extends Component {
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

      <div className="carousel carousel-slider center" data-indicators="true">
      <div className="carousel-fixed-item center">
        <a className="btn waves-effect white grey-text darken-text-2">button</a>
      </div>
      {
        this.state.sources.map((source)=>
          <div className="carousel-item red white-text" key={source.id}>
            <h2>{source.name}</h2>
            <p className="white-text">{source.description}</p>
          </div>
      )
      }
      </div>
      </div>
    );
  }
}

export default Carousel;