import React, { Component } from 'react';

class Article extends Component {

  render() {
    if(this.props.data){
      let currentArticle = {};
      let articles = this.props.data;
      let articleId = this.props.value;
      
      for (let i=0; i<Object.keys(articles).length; i++) {
        let targetId = articles[i].id;       
        if (targetId === articleId) {
          currentArticle = this.props.data[i]         
          break;
        }
      }
      var title = currentArticle.title;
      var subtitle = currentArticle.subtitle;
      var image = 'images/'+ currentArticle.image;
      var imageName = currentArticle.image
      // var content = currentArticle.content;
      var content = 'articletext/' + currentArticle.content;
      var author = currentArticle.author;
    }

    return (
      <div className="fullArticle">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={image} alt={imageName} />
        <p className="author">author: {author}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: content}}></div> */}
        <iframe className="articleFrame" src={content}></iframe>
      </div>
    );
  }
}

export default Article;