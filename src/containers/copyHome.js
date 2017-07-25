import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      edad: '21',
      direccion: 'Wework',
      date: '05/23/18'
    }

    this.changeState = this.changeState.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeState(){
    this.setState({
      edad: '28',
      direccion: 'Belgrado'
    })
  }

  changeDate(e){
    this.setState({
      date: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React, { this.props.name } { this.props.lastName }</h2>
          <h4> { this.state.edad } { this.state.direccion } {this.state.date }</h4>
        </div>
        <p className="App-intro">
          <button onClick={ this.changeState }> dame click</button>
          <br/>
          <input value={ this.state.date } onChange={this.changeDate}></input>
        </p>
      </div>
    );
  }
}

export default Home;
