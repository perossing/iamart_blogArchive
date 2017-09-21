import React, { Component } from 'react';

class ArticleList extends Component {
  constructor(props){
    super(props);

    this.state = {
        articleId: props.value
    }
  }

  onClick(articleId){
      this.setState({articleId});
      this.props.onArticleSelection(articleId);
  }

  render() {
    let sortByTitle = function(a,b){
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0
    }

    let articles = this.props.articles;
    let titles = [];
      for (let i=0; i<Object.keys(articles).length; i++){
        titles[i] = {}
        titles[i].id=(articles[i].id)
        titles[i].title=(articles[i].title)
      }
    let sortedTitles = titles.sort(sortByTitle);
    let articleId;
    var titleList = sortedTitles.map((article, i)=>{
      articleId = article.id;
      return <li key={i} className="articleName" onClick={this.onClick.bind(this, articleId)}>{article.title}</li>
    });

    return (       
      <div className="articleList">
        <h3>articles</h3>
        <ul>
          {titleList}
        </ul>
      </div>
    );
  }
}

export default ArticleList;