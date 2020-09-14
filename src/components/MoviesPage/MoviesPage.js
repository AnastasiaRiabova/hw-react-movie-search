import React, { Component } from 'react';
import searchMovie from '../Api';
import { NavLink } from 'react-router-dom';
import querystring from 'query-string';

export class MoviesPage extends Component {
  state = {
    inputValue: '',
    searchResult: [],
  };

  enterInputInfo = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  async componentDidMount() {
    const { query } = querystring.parse(this.props.location.search);
    if (query) {
      const search = await searchMovie.searchMovie(query);
      this.setState({ searchResult: search.results });
    }
  }

  async componentDidUpdate(props, state) {
    const { query } = querystring.parse(this.props.location.search);
    const { query: prevQuery } = querystring.parse(props.location.search);

    if (query !== prevQuery) {
      const search = await searchMovie.searchMovie(query);
      this.setState({ searchResult: search.results });
    }
  }

  handelQuerySting = e => {
    e.preventDefault();

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.inputValue}`,
    });
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handelQuerySting}>
            <input
              className="input-style"
              type="text"
              name={this.state.inputValue}
              onChange={this.enterInputInfo}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul>
          {this.state.searchResult.length > 0 &&
            this.state.searchResult.map(el => (
              <li key={el.id}>
                <NavLink
                  to={{
                    pathname: `movies/${el.id}`,
                    state: {
                      from: `${this.props.location.pathname}${this.props.location.search}`,
                    },
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

export default MoviesPage;
