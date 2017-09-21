import React, { Component } from 'react';

const Tag = (props) => {
    return (
      <div className="white">{props.value}</div>
    )  
}

class Tags extends Component {
  constructor(props){
    super(props);

    this.state = {
        selectedTag: ''
    }       
}

  changeTag(event){
    this.setState({selectedTag: event.target.innerHTML}, () => {
      this.props.onTagSelection(this.state.selectedTag);
    });
  }

  render() {

    let articles = this.props.data;    

    //get 2D array of tags from all articles
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

    tags.push('clear highlights');

    let capsule;
    let capsuleClass="tagCapsule";
    var tagCapsules = tags.map((tag, i)=>{
      if (tag === "clear highlights"){
        capsuleClass = "clear"
      }
      capsule = <div className={capsuleClass} key={i} onClick={this.changeTag.bind(this)}><Tag value={tag}/></div>
      return capsule;
    });
    
      return (
          <div className="tagList">
            <h3>categories</h3>
            <p>click a topic to highlight articles by category:</p>
            <div>{tagCapsules}</div>
          </div>
        )
      }
  }


  
  export default Tags;

