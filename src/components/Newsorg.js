// import React, { Component } from 'react'
// import Newsitem from './Newsitem';

// export class News extends Component {
    
//     constructor(){
//         super();
//         console.log("Hello , I am a constructor");
//         this.state={
//             page:1,
//             articles:[],
//             loading:false
//         }
//     }
//     async componentDidMount(){
//       let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-12-21&sortBy=publishedAt&apiKey=d71b519a0d6649e2bb2d9b123fad0a2f&pageSize=20";
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
//     }
//     handlePrevclick=async()=>{
//       let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-21&sortBy=publishedAt&apiKey=d71b519a0d6649e2bb2d9b123fad0a2f&page=${this.state.page-1}&pageSize=20`;
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
      
//       this.setState({
//         page: this.state.page-1,
//         articles:parsedData.articles
//       })
//     }
//     handleNextclick=async()=>{
//       if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

//       }
//       else{
//         let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-21&sortBy=publishedAt&apiKey=d71b519a0d6649e2bb2d9b123fad0a2f&page=${this.state.page+1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
      
//       this.setState({
//         page: this.state.page+1,
//         articles:parsedData.articles
//       })
//       }
      
      
      
//     }

//   render() {
//     return (
//       <div>
//         <div className="container my-3">
//             <h2>Newsmonkey - Top Headlines</h2>
//                 <div className="row">
//                 {this.state.articles.map((element)=>{
//                      return <div className="col-md-4" key={element.url} >
//                      <Newsitem title={element?element.title.slice(0,45):""} description={element?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
//                      </div>

//                 })}
               
                
//             </div>
//             <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>  &larr; Previous</button>
//             <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr; </button>
//             </div>
       
        
//         </div>
        
//       </div>
//     )
//   }
// }

// export default News
