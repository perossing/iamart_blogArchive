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
    articleId: 1,
    selectedTag: ''
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
  this.setState({articleId: value})
}

setTag(value){
  this.setState({selectedTag: value}, function(){
    console.log(value);
  });
}

  render() {
    return (
      <div>
        <p className="intro">
        Whether you make art as a hobby or to make your living, we want you to be successful in your artistic endeavors.  These articles address some of the most frequent questions we hear from artists.
        </p>
        <Article data={this.state.articleData.main} value={this.state.articleId}/>
        <br />
        <ArticleList data={this.state.articleData.main} value={this.state.articleId} onArticleSelection={this.changeArticle.bind(this)}/>
        <div className="articleTags">
        {/* <Tags data={this.state.articleData.main} onTagSelection={this.setTag.bind(this)}/> */}
        </div>
      </div>
    );
  }
}

export default App;