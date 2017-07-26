import React, { Component } from 'react';
import Category from './Category'



class Aside extends Component {

  render() {
    return (
      <div className="col m4 s12">
        <Category/>
      </div>
    );
  }
}

export default Aside;
