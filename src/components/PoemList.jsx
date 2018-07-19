import React from 'react';
import { connect } from 'react-redux';
import { fetchPoems } from '../actions/searchAction';
import PropTypes from 'prop-types';

class PoemList extends React.Component {

  componentDidMount() {
    this.props.fetchPoems();
  }

  render() {

    const searchResults = this.props.poemList.map(poem => (
      <div key={poem.id}>
        <h2>{poem.title}</h2>
        <h4>{poem.author}</h4>
        <pre>{poem.lines.join('\n')}</pre>
      </div>
    ));
    return (
      <div>
        <p>Poem list: Search results from api call</p>
        {searchResults}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  poemList: state.poemList.results
});

export default connect(mapStateToProps, { fetchPoems })(PoemList);
