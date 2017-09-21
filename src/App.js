import React, { Component } from 'react';
import './App.css';
import Article from './Components/Article';
import ArticleList from './Components/ArticleList';
import JSONData from './AM-articles.json';
import Tags from './Components/Tags';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    articles:JSONData,
    articleId: 1,
    selectedTag: ''
  }
}

changeArticle(id){
  this.setState({articleId: id})
}

setTag(category){
  this.setState({selectedTag: category}, function(){
    console.log(category);
  });
}

  render() {
    return (
      <div>
        <Article articles={this.state.articles} id={this.state.articleId}/>
        <br />
        <ArticleList articles={this.state.articles} id={this.state.articleId} onArticleSelection={this.changeArticle.bind(this)}/>
        <div className="articleTags">
        <Tags data={this.state.articles}/>
        </div>
      </div>
    );
  }
}

export default App;