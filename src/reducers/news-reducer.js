const initialState = {
  news: [],
  loading: false,
  error: false
};

const updateNewsList = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        news: [],
        loading: true,
        error: false
      };

    case "GET_NEWS_SUCCESS":
      return {
        news: action.payload,
        loading: false,
        error: false
      };

    case "GET_NEWS_FAILURE":
      return {
        news: [],
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default updateNewsList;
