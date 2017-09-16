import React, { Component } from 'react';
//import Article from './Article';

class Tag extends Component {

  render(){  
      return (
        <div className="tagCapsule">
          {this.props.value}
        </div>
      );
    }
  }



class Tags extends Component {


  
    render(){
      if(this.props.data){
        let articles = this.props.data;

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

      }
        return (
          <div>
            <p>click a topic to filter articles by topic:</p>
            {tagCapsules}
          </div>
        );
      }
    }
  
  export default Tags;

