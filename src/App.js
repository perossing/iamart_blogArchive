import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Article from './Components/Article';
// import Preview from './Components/Preview';
import ArticleList from './Components/ArticleList';
import Tags from './Components/Tags';

class App extends Component {
constructor(props){
  super(props);
  this.changeArticle = this.changeArticle.bind(this);
  this.state = {
    articleData:{},
    articleId: 1
  }
}

getArticles(){
  $.ajax({
    url:'AM-articles.json',
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
        <p>
            Intro text about iAMart and art materials articles ...
        </p>
        {/* <Preview data={this.state.articleData.main} value={this.state.articleId}/>        */}
        <Article data={this.state.articleData.main} value={this.state.articleId}/>
        <br />
        <ArticleList data={this.state.articleData.main} value={this.state.articleId} onArticleSelection={this.changeArticle.bind(this)}/>
        <div className="articleTags">
        <Tags data={this.state.articleData.main}/>
        </div>
      </div>
    );
  }
}

export default App;