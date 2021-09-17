import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  captaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.captaliseFirstLetter(
      this.props.category
    )} News - Discuss India Get Today's Latest  News`;
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76ad31b4139a4d3fa94807df259870cc&page=1&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76ad31b4139a4d3fa94807df259870cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parseData = await data.json();
    this.setState({ loading: false });
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  // handlePrevious = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=76ad31b4139a4d3fa94807df259870cc&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   const data = await fetch(url);
  //   const parseData = await data.json();
  //   this.setState({ page: this.state.page - 1, articles: parseData.articles });
  //   this.setState({ loading: false });
  // };

  // handleNext = async () => {
  //   if (
  //     this.state.page + 1 <=
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //     this.setState({
  //       page: this.state.page + 1,
  //       loading: true,
  //     });
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76ad31b4139a4d3fa94807df259870cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;

  //     const data = await fetch(url);
  //     const parseData = await data.json();
  //     this.setState({ articles: parseData.articles });
  //     this.setState({ loading: false });
  //   } else {
  //   }
  // };

  render() {
    return (
      <>
        <h2 className="text-center my-4">
          Discuss India Top {this.captaliseFirstLetter(this.props.category)}{" "}
          HeadLines
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.loading ? (
                <Loading />
              ) : (
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 35) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imgUrl={
                          !element.urlToImage
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tD-R6woLPLtBBocrb_wcbJQuwI3dv_s-IA&usqp=CAU"
                            : element.urlToImage
                        }
                        newsUrl={element.url}
                        lastUpdated={element.publishedAt}
                        author={element.author}
                        newsSource={element.source.name}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
