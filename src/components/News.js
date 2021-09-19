import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const captaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${captaliseFirstLetter(
    props.category
  )} News - Discuss India Get Today's Latest  News`;

  async function fetchData() {
    props.setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    props.setProgress(30);

    const data = await fetch(url);

    const parseData = await data.json();
    if (parseData.articles) {
      props.setProgress(50);
      setLoading(false);
      props.setProgress(60);
      setArticles(parseData.articles);
      setTotalResults(parseData.totalResults);
      props.setProgress(100);
    } else {
      props.setProgress(50);
      setLoading(false);
      props.setProgress(60);
      setArticles([]);
      setTotalResults(0);
      props.setProgress(100);
    }
    setPage(page + 1);
  }

  const fetchMoreData = async () => {
    props.setProgress(0);
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    const data = await fetch(url);
    const parseData = await data.json();
    props.setProgress(60);

    setLoading(false);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "100px" }}>
        Discuss India Top {captaliseFirstLetter(props.category)} HeadLines
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {loading ? (
              <Loading />
            ) : articles.length > 1 ? (
              articles.map((element) => {
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
            ) : (
              <h1>Error While fetchign Data from server</h1>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
