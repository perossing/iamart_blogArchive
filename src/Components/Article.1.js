import React from 'react';

const Article = (props) => {
  
      if(props.data){
        let currentArticle = {};
        let articles = props.data;
        let articleId = props.value;
        
        for (let i=0; i<Object.keys(articles).length; i++) {
          let targetId = articles[i].id;       
          if (targetId === articleId) {
            currentArticle = props.data[i]         
            break;
          }
        }
        var title = currentArticle.title;
        var subtitle = currentArticle.subtitle;
        var image = 'images/'+ currentArticle.image;
        var imageName = currentArticle.image
        var content = 'articletext/' + currentArticle.content;
        var author = currentArticle.author;
      }
  
      return (
        <div className="fullArticle">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <img src={image} alt={imageName} />
          <p className="author">author: {author}</p>
          <iframe className="articleFrame" src={content} title="articles"></iframe>
        </div>
      );
  }

export default Article;