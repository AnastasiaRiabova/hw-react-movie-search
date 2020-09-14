import React, { Component } from 'react';
import ActorsList from '../Api';

export class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const castList = await ActorsList.ActorsList(
      this.props.match.params.movieId,
    );
    this.setState({ actors: castList });
  }

  render() {
    return (
      this.state.actors.length > 0 && (
        <ul>
          {this.state.actors.map(el => (
            <li key={el.id}>
              {el.name}
              {el.profile_path !== null && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
                  alt={el.name}
                  width="150"
                />
              )}
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default Cast;
