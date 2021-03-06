import React from 'react';
import heart from '../assets/heart_white.png';

function Poem(props) {
  const poemContainer = {
    borderBottom: '1px solid black',
    paddingBottom: '20px',
  };
  const headerFlex = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-20px',
  }
  const heartFlex = {
    alignSelf: 'center',
    marginLeft: '20px',
  }
  const heartBtn = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    outline:'none',
  }
  return (
    <div style={poemContainer}>
      <div style={headerFlex}>
        <h2>{props.title}</h2>
        <button style={heartBtn}><img style={heartFlex} src={heart}/></button>
      </div>
      <h4><em>{props.author}</em></h4>
      <pre>{props.lines.join('\n')}</pre>
    </div>
  );
}

export default Poem;
