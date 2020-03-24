import axios from "axios";

const GET_NEWS = "GET_NEWS";
const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";

const getNews = () => ({
  type: GET_NEWS
});

const getNewsSuccess = news => ({
  type: GET_NEWS_SUCCESS,
  payload: news
});

const apiUrl =
  "http://newsapi.org/v2/top-headlines?" +
  "country=ua&" +
  "apiKey=116bdf14f7054172ba6bae76c24847b1";
const fetchAllNews = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(dispatch(getNews()))
      .then(response => {
        console.log(response.data.articles);
        dispatch(getNewsSuccess(response.data.articles));
      })
      .catch(error => {
        throw error;
      });
  };
};

export default fetchAllNews;
