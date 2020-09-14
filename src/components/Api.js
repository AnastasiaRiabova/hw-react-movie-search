import Axios from 'axios';

const ApiKey = '89b9004c084fb7d0e8ffaadd17cb8254';

const Api = () => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`,
  ).then(res => res.data.results);
};

const IdSearch = id => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`,
  ).then(res => res.data);
};

const ActorsList = id => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`,
  ).then(res => res.data.cast);
};

const getReview = id => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`,
  ).then(res => res.data);
};

const searchMovie = data => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${data}&page=1&include_adult=false`,
  ).then(res => res.data);
};
export default { Api, IdSearch, ActorsList, getReview, searchMovie };
