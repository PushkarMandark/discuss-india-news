import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, lastUpdated, author, newsSource } =
    props;
  return (
    <>
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span
            style={{ left: "87%" }}
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          >
            {newsSource ? newsSource : "unknown"}
          </span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on{" "}
              {new Date(lastUpdated).toUTCString()}
            </small>
          </p>

          <a
            href={newsUrl}
            className="btn btn-sm btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            Read More...
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
