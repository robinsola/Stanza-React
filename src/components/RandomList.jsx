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
        {props.randoms.map((random, index) =>
          <RandomPoem title={random.title}
            poet={random.poet.name}
            content={random.content}
            key={index}/>
        )}
      </div>
    </div>
  );
}

RandomList.propTypes = {
  randoms: PropTypes.array
};

export default connect()(RandomList);
