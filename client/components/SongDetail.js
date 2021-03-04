import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div></div>
    }

    const { song } = this.props.data;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(
  fetchSong,
  { options: props => ({ variables: { id: props.params.id } }) } // Whatever is returned will be sent alongside the query.
)(SongDetail);
// React Router will render graphql by passing the props, graphql will render SongDetail by passing the props object.
// We can use the props object on the options function that will render whatever we return alongside the query.