import React from 'react';

let Article = (props) => {

        let current = props.articles.filter((item)=>{
            return item.id === props.id;
        });

        let article = current[0]

        let title = article.title;
        let subtitle = article.subtitle;
        let image = 'images/'+ article.image;
        let imageName = article.image
        let content = 'articletext/' + article.content;
        let author = article.author;
  
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