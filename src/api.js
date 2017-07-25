const api = {
  async getArticlesBySource(sourceId){
    const response = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=0965123fc20a4a8d85187b97d62180b0`)
    return await response.json();
  },
  async getSources(){
    const response = await fetch("https://newsapi.org/v1/sources?language=en")
    return await response.json();
  }
}

export default api;
