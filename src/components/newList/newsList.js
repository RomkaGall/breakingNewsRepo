import React, { Component } from "react";
import "./newsList.scss";
import NewsListItem from "../newsListItem";
import { connect } from "react-redux";
import fetchAllNews from "../../actions/newsActions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class NewsList extends Component {
  componentDidMount = () => {
    this.props.fetchAllNews();
  };

  render() {
    const { loading, news, error } = this.props.items;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="news__list">
        {news.map((news, i) => {
          return (
            <NewsListItem
              key={i}
              name={news.title}
              description={news.description}
              url={news.url}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNews: () => dispatch(fetchAllNews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
