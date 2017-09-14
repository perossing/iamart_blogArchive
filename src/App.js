import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Article from './Components/Article';
import ArticleList from './Components/ArticleList';

class App extends Component {
constructor(props){
  super(props);
  this.changeArticle = this.changeArticle.bind(this);
  this.state = {
    articleData:{},
    articleId: 0
  }
}

getArticles(){
  $.ajax({
    url:'http://localhost:3000/AM-articles.json',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({articleData: data});      
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
      alert(err);
    }
  });
}

componentDidMount(){
  this.getArticles();
}

changeArticle(value){
  this.setState({articleId: value}, function(){
  });
}

  render() {
    return (
      <div>          
         <Article data={this.state.articleData.main} value={this.state.articleId}/>
         <br />
         <ArticleList data={this.state.articleData.main} value={this.state.articleId} onArticleSelection={this.changeArticle.bind(this)}/>
      </div>
    );
  }
}

export default App;

