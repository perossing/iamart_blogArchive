import React, { Component } from 'react';

class ArticleList extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        articleNumber: props.value
    }
  }

  onClick(articleId){
      this.setState({articleNumber: articleId}, function(){
        this.handleChange();
     });
  }

  handleChange(){
    this.props.onArticleSelection(this.state.articleNumber);
  }

  render() {
    let sortByTitle = function(a,b){
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0
    }

    if(this.props.data){ 
      let articles = this.props.data;
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
    }

    return (       
      <div>
        <ul className="scrollList">
          {titleList}
        </ul>
      </div>
    );
  }
}

export default ArticleList;