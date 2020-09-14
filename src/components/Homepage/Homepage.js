import React, { Component } from 'react';
import Api from '../Api';
import { NavLink } from 'react-router-dom';

export class Homepage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const data = await Api.Api();
    this.setState({ movies: data });
  }

  render() {
    return (
      <>
        <h1>Popular today:</h1>
        <ul>
          {this.state.movies.length > 0 &&
            this.state.movies.map(el => (
              <li key={el.id}>
                <NavLink
                  to={{
                    pathname: `movies/${el.id}`,
                    state: { from: this.props.location.pathname },
                  }}
                >
                  {el.title || el.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default Homepage;
