import React, { Component } from 'react';
import api from '../api';

class Articles extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      source: ''
    }
    this.getArticles = this.getArticles.bind(this);
  }

  async getArticles(){
    let response = await api.getArticlesBySource(this.props.match.params.sources_id);
    console.log(this.props.match.params.sources_id);
    console.log(response);
    this.setState({
      articles: response.articles,
      source: response.source
    })
  }

  componentDidMount(){
    this.getArticles();
  }

  render() {
    return (
      <div>
      <h1> {this.state.source} </h1>
      <div className="row">
     {
        this.state.articles.map(article =>
          <div className="col s3">
              <div className="card big">
                <div className="card-image">
                  <img src={article.urlToImage}/>
                  <span className="card-title">{article.title}</span>
                </div>
                <div className="card-content">
                  <p>{article.description}</p>
                </div>
                <div className="card-action">
                  <a href={article.url}>Ver mas</a>
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

export default Articles;
