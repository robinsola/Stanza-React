import React from 'react';
import PropTypes from 'prop-types';
import Poem from './Poem';
import {connect} from 'react-redux';
import Navbar from './Navbar';

function PoemList(props) {
  if (props.poems.length === 0) {
    return(
      <div>
        <Navbar />
        <div className='topPadding'>
          <h3>Loading...</h3>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <Navbar />
        <div className='topPadding'>
          {props.poems.map((poem, index) =>
            <Poem title={poem.title}
              author={poem.author}
              lines={poem.lines}
              key={index}/>
          )}
        </div>
      </div>
    );
  }
}

PoemList.propTypes = {
  poems: PropTypes.array
};

export default connect()(PoemList);
