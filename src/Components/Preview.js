import React, { Component } from 'react';

class Preview extends Component {


  render() {
    if(this.props.data){
      let currentArticle = {};
      let articles = this.props.data;
      let articleId = this.props.value;
      let previewCount = 0;
      let previewArticles = []
      
      for (let i=0; i<Object.keys(articles).length; i++) {
        let artId = articles[i].id;
             
        if (artId === articleId) {
          currentArticle = this.props.data[i]
          previewCount++;
          articleId = artId+1;
          previewArticles.push(currentArticle.title);
          if (previewCount===2){
            console.log(previewArticles);
            break;
          }
        }
      }
      var title = currentArticle.title;
      var subtitle = currentArticle.subtitle;
      var image = 'images/'+ currentArticle.image;
      var imageName = currentArticle.image
      var content = currentArticle.content;
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