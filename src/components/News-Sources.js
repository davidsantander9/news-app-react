import React, { Component } from 'react';
import api from '../api';
import { NavLink } from 'react-router-dom';


class NewsSources extends Component {

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
      <div className="col m8 s12">
        <div className="row">
          {
            this.state.sources.map((source)=>

            <div key={source.id}  className="col s12 m6">
              <div className="card grey lighten-5 z-depth-1">
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
        </div>
      </div>
    );
  }
}

export default NewsSources;
