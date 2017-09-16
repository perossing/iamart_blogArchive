import React, { Component } from 'react';

class Preview extends Component {

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
        <img src={image} alt={imageName} width="200"/>
        <h4>{title}: {subtitle}</h4>
        <div dangerouslySetInnerHTML={{ __html: content}}></div>
      </div>
    );
  }
}

export default Preview;