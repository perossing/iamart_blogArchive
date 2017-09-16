import React, { Component } from 'react';

class Article extends Component {

  render() {
    if(this.props.data){
      let currentArticle = {};
      let articles = this.props.data;
      let articleId = this.props.value;
      
      for (let i=0; i<Object.keys(articles).length; i++) {
        let artId = articles[i].id;       
        if (artId === articleId) {
          currentArticle = this.props.data[i]         
          break;
        }
      }
      var title = currentArticle.title;
      var subtitle = currentArticle.subtitle;
      var image = 'images/'+ currentArticle.image;
      var imageName = currentArticle.image
      var content = currentArticle.content;
      var author = currentArticle.author;
    }

    return (
      <div className="fullArticle">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={image} alt={imageName} />
        <div dangerouslySetInnerHTML={{ __html: content}}></div>
        <p>author: {author}</p>
      </div>
    );
  }
}

export default Article;