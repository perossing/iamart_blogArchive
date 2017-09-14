import React, { Component } from 'react';

class ArticleList extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        articleNumber: props.value
    }
  }

  onClick(i){
      this.setState({articleNumber: i}, function(){
        this.handleChange();
     });
  }

  handleChange(){
    this.props.onArticleSelection(this.state.articleNumber);
  }

  render() {
    if(this.props.data){
      var articles = this.props.data;
      var titleList = articles.map((article,i)=>{
        return <li key={i} value={i} className="articleName" onClick={this.onClick.bind(this, i)}>{article.title}</li>
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
