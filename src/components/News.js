import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller';

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  captitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("Hello, I am a constructor");
    this.state = {
      page: 1,
      articles: [], // Ensure articles is initialized as an empty array
      loading: true,
      totalResults:0
    };
    document.title = `${this.captitalizeFirstLetter(this.props.category)}-NewsMonkey`;
    
  }

  async updateNews() {
    this.props.setProgress(10);     // initial progress
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    if (parsedData.articles) {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevclick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextclick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData=async()=>{
   
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    if (parsedData.articles) {
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
       
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "35px" }}>
            Newsmonkey - Top {this.captitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
          {/* { this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            // hasMore={this.state.articles.length<this.state.totalResults}
            hasMore={this.state.articles.length != this.state.totalResults &&  this.state.articles.length < this.state.totalResults }
            loader={<Spinner />}
            
          >
          <div className="row">
            {this.state.articles && this.state.articles.length > 0 ? (this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title.slice(0, 45) : "No Title"} description={element.description ? element.description.slice(0, 88) : "No Description" }
                    imageUrl={element.urlToImage || "default-image-url.jpg"}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
                
              ))
            ) : (
              <p>Loading articles...</p>
            )}
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevclick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextclick}
            >
              {" "}
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
