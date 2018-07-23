import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Poem from './Poem'

function PoemList(props) {
  return (
    <div>
      {props.poems.map((poem, index) =>
      <Poem title={poem.title}
      author={poem.author}
      lines={poem.lines}
      key={index}/>
      )}
    </div>
  );
}

PoemList.propTypes = {
  poems: PropTypes.array
};

export default connect()(PoemList);
