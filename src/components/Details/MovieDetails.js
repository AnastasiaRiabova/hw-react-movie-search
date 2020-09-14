import React, { Component } from 'react';
import IdSearch from '../Api';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Review/Reviews';
import Image from '../default.jpg';

export class MovieDetails extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await IdSearch.IdSearch(this.props.match.params.movieId);
    this.setState({ data: data });
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push('/movies');
  };

  render() {
    const date = this.state.data.release_date;

    return (
      <>
        <button className="btn" type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <div className="container">
          <div>
            <img
              src={
                this.state.data.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w300/${this.state.data.poster_path}`
                  : Image
              }
              alt="this.state.data.title"
              width="250"
            />
          </div>
          <div>
            {Object.keys(this.state.data).length > 0 && (
              <>
                <h1 className="stiles-headers">{this.state.data.title}</h1>
                <p className="stiles-headers">({date.slice(0, 4)})</p>
                <p className="item">Overview: {this.state.data.overview}</p>
                <ul className="list-item-styles">
                  Genres:
                  {this.state.data.genres.map(el => (
                    <li className="list-item" key={el.id}>
                      {el.name + ' '}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetails;
