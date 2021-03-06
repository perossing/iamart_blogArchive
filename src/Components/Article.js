import React from 'react';

const Article = (props) => {

        const current = props.articles.filter((item)=>{
            return item.id === props.id;
        });

        const article = current[0];
        const title = article.title;
        const subtitle = article.subtitle;
        const image = 'images/'+ article.image;
        const imageName = article.image
        const content = 'articletext/' + article.content;
        const author = article.author;
  
      return (
        <div className="fullArticle">
          <p className="more-info">scroll down to select from list of articles</p>
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
          <img className="articlePic" src={image} alt={imageName} />
          <p className="author">author: {author}</p>
          <iframe className="articleFrame" src={content} title="articles"></iframe>
        </div>
      );
  }

export default Article;