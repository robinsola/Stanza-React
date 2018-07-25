import React from 'react';
import PropTypes from 'prop-types';
import RandomPoem from './RandomPoem';
import {connect} from 'react-redux';
import Navbar from './Navbar';

function RandomList(props) {
  return(
    <div>
      <Navbar />
      <div className='topPadding'>
        {props.poems.map((poem, index) =>
          <RandomPoem title={poem.title}
            poet={poem.poet.name}
            content={poem.content}
            key={index}/>
        )}
      </div>
    </div>
  );
}

RandomList.propTypes = {
  poems: PropTypes.array
};

export default connect()(RandomList);
