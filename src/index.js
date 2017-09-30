import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './articles.css';
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
    selectedTag: 'all'
  }
}

changeArticle(id){
  this.setState({articleId: id})
}

newTag(value){
  this.setState({selectedTag: value})
}

  render() {
    return (
      <div>
        <Article articles={this.state.articles} id={this.state.articleId}/>        
        <br />
        <div className="selections">
          <ArticleList articles={this.state.articles} id={this.state.articleId} filter={this.state.selectedTag} onArticleSelection={this.changeArticle.bind(this)}/>
          <div className="articleTags">
          <Tags data={this.state.articles} onTagSelection={this.newTag.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#archive'));
