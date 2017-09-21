import React, { Component } from 'react';

class Tag extends Component {

  onClick(tagName) {
    this.setState({
      selectedTag: tagName
    }, function () {
      console.log(tagName);
      // this.handleChange();
    });
  }  

  render(){    
     var tagName = this.props.value;
      return (
        <div className="tagCapsule" onClick={this.onClick.bind(this, tagName)}>
          {tagName}
        </div>
      );
    }
  }

const Tags = (props) => {
 
  // if(this.props.data){
    let articles = props.data;

    //get 2d array of tags from all articles
    let tagArrays=[];
    articles.map((article, i)=>{
      tagArrays.push(article.tags);
      return tagArrays
    })

    //combine tags into single array
    let singleTagArr=[];
    for (let i = 0; i<tagArrays.length; i++) {
      for (let j=0; j<tagArrays[i].length; j++) {
        singleTagArr.push(tagArrays[i][j])
      }
    }

    //make unique set of tags (object)
    var tagSet = new Set(singleTagArr);

    //convert set to object & alphabetize
    let tags = Array.from(tagSet).sort();

    var tagCapsules = tags.map((tag, i)=>{
      return <Tag key={i} value={tag}/>
    });

  // }
    return (
        <div className="tagList">
          <h3>categories</h3>
          <p>click a topic to filter article list by category:</p>
          {tagCapsules}
        </div>
    );
}    
  
  export default Tags;

