import React from 'react';
import PropTypes from 'prop-types';
import RandomPoem from './RandomPoem';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import feather from '../assets/feather.png';
import inkWell from '../assets/logo2.png';

function RandomList(props) {
  if (props.randoms.length === 0) {
    return (
      <div>
        <Navbar />
        <div className='topPadding loader'>
          <h3>Loading...</h3>
        </div>
      </div>
    );
  } else {
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
}

RandomList.propTypes = {
  randoms: PropTypes.array
};

export default connect()(RandomList);
