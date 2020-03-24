import React from "react";
import "./newsListItem.scss";

const NewsListItem = props => {
  return (
    <div className="news__item">
      <a href={props.url} className="news__link">
        <h2 className="news__title">{props.name}</h2>
      </a>
      <p className="news__description">{props.description}</p>
    </div>
  );
};

export default NewsListItem;
