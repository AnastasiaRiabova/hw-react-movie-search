import React, { Component } from 'react';
import getReview from '../Api';

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const reviewList = await getReview.getReview(
      this.props.match.params.movieId,
    );
    this.setState({ reviews: reviewList.results });
  }

  render() {
    return (
      <div>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(el => (
              <li key={el.id}>
                {el.author} <p>{el.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We have no reviews</p>
        )}
      </div>
    );
  }
}

export default Reviews;
