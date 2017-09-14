import React, { Component } from 'react';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      articleNumber: props.value
    }
  }


  render() {
    let index = this.props.value;
    if(this.props.data){
      let article = this.props.data[index];
      var title = article.title;
      var subtitle = article.subtitle;
      var image = 'images/'+ article.image;
      var imageName = article.image
      var content = article.content;
      var author = article.author;
    }

    return (
      <div className="articleDisplay">
        <p>
            Intro text about iAMart and art materials articles ...
        </p>
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
