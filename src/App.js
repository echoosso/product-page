import React, {Component} from "react";
import BlogItem from "./BlogCard";
import { IsArrayEmpty as checkArrayIsEmpty } from "./Utils";
import "./App.css";


class App extends Component {
  state= {
    showBlogs : true

  
  }
   blogArr = [{
    id: 1 ,
    title: " Blog Title 1 ",
    description: "lorem Ipsum Dolor lorem Ipsum Dolor lorem Ipsum Dolor"
  },
  {
    id: 2 ,
    title: " Blog Title 2 ",
    description: "lorem Ipsum Dolor lorem Ipsum Dolor lorem Ipsum Dolor"
  },
  {
    id: 3 ,
    title: " Blog Title 3 ",
  description: "lorem Ipsum Dolor lorem Ipsum Dolor lorem Ipsum Dolor"
}
]
 blogCards = checkArrayIsEmpty(this.blogArr) ? []: this.blogArr.map((item,pos) => {
  console.log(item);
  return(
    < BlogItem  className={'Blog'} key={pos} title={item.title} description={item.description} 
    likeCount ={item.likeCount} id={item.id} onLikeBtnClick ={item.onLikeBtnClick} position={pos} />
    // <div className="BlogCard" key={item.id}>
    //     <h3>{item.title} </h3>
    //     <p>{item.description}</p>
    //   </div>
  )
})
  onHideBtnClick =() =>{
    // let updatedState = !this.state.showBlogs;
  this.setState((prevState,prevProps) => { 
    return{showBlogs: !prevState.showBlogs}
  });
  console.log(this.state.showBlogs)
 }
 render(){
  console.log("Render Called");
  return (
    <div className="App">
      <button  onClick={this.onHideBtnClick}> {this.state.showBlogs ?' Hide List': 'Show List '}</button>
      <br></br>
      {this.state.showBlogs ? this.blogCards : null }
     { /* <div className="BlogCard">
        <h3>{blogObj.title} </h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div  className="BlogCard">
        <h3>{blogObj.title} </h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div  className="BlogCard">
        <h3>{blogObj.title} </h3>
        <p>{blogObj.description}</p>
  </div> */}
    </div>
  );
 }
  
}

export default App;
