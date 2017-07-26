import React, { Component } from 'react';
import api from '../api';


class Test extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
    this.getSources = this.getSources.bind(this);
  }

  async getSources(){
    let response = await api.getSources();
    var tempCategories = [];
    for (var i in response.sources) {
      var flag = true;
      for (var j in tempCategories){
        if(response.sources[i].category === tempCategories[j].category){
          flag = false;
        }
      }
      if( flag )
        tempCategories.push(response.sources[i]);
   }

    this.setState({
      categories: tempCategories
    })

  }

  componentDidMount(){
    this.getSources();
  }

  render() {
    return (
      <div className="Category">
        <h3>Categorias</h3>
        <div className="collection">
          {
            this.state.categories.map((category)=>
              <a key={category.id} href="#!" className="collection-item">{category.category}</a>
            )
          }
        </div>
      </div>
    );
  }
}

export default Test;
