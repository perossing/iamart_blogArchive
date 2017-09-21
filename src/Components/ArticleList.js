import React, { Component } from 'react';

class ArticleList extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //       // articleId: '',
  //   }
  // }

  onClick(articleId){
      // this.setState({articleId});
      this.props.onArticleSelection(articleId);
  }

  render() {
    const sortByTitle = function(a,b){
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0
    }

    let articles = this.props.articles;
    let titles = [];
    articles.map((article, i)=>{
        titles[i] = {};
        titles[i].id=(articles[i].id);
        titles[i].title=(articles[i].title);
        titles[i].tags=(articles[i].tags);     
      return titles;
    });  
  

    let titlesAlphabetical = titles.sort(sortByTitle);
    let titleName;
    let titleClasses = "articleName"
    var titleList = titlesAlphabetical.map((article)=>{
      if (article.tags.indexOf(this.props.filter) !== -1){
        titleClasses += " highlight"
      } else {
        titleClasses = "articleName"
      }
      titleName = <li key={article.id} className={titleClasses} onClick={this.onClick.bind(this, article.id)}>{article.title}</li>
      return titleName;
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