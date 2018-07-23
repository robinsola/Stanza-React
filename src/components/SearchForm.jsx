import React from 'react';
import PoemList from './PoemList';
import Navbar from './Navbar';
import './searchForm.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {

  onKeywordChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type: 'SEARCH_KEYWORD', inputKeyword: e.target.value})
  }

  fetchPoems = () => {
    let {dispatch} = this.props;
    let {inputKeyword} = this.props;
    fetch(`http://poetrydb.org/title/${inputKeyword}`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({type: 'FETCH_POEMS', results: response})
      })
  }

  render () {
    const poemList = this.props.poems.map(poem => (
      <div key={poem.id}>
        <h2>{poem.title}</h2>
        <h4>{poem.author}</h4>
        <pre>{poem.lines.join('\n')}</pre>
      </div>
    ));
    return (
      <div>
        <Navbar />
        <div className='formStyles'>
          <form>
            <h3 className="title">pick a theme:</h3>
            <div className='radioGroup'>
              <label><input type='radio' value='anniversary' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'anniversary'}/><span>Anniversary</span></label>
              <br />
              <label><input type='radio' value='birthday' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'birthday'}/><span>Birthday</span></label>
              <br />
              <label><input type='radio' value='farewell' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'farewell'}/><span>Breakup</span></label>
              <br />
              <label><input type='radio' value='romance' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'romance'}/><span>Casual Hookup</span></label>
              <br />
              <label><input type='radio' value='celebrate' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'celebrate'}/><span>Congratulations</span></label>
              <br />
              <label><input type='radio' value='father' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'father'}/><span>Father's Day</span></label>
              <br />
              <label><input type='radio' value='death' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'death'}/><span>Funeral</span></label>
              <br />
              <label><input type='radio' value='fear' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'fear'}/><span>Halloween</span></label>
              <br />
              <label><input type='radio' value='mother' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'mother'}/><span>Mother's Day</span></label>
              <br />
              <label><input type='radio' value='spring' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'spring'}/><span>Spring</span></label>
              <br />
              <label><input type='radio' value='thank' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'thank'}/><span>Thank You</span></label>
              <br />
              <label><input type='radio' value='love' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'love'}/><span>Wedding</span></label>
              <br />
              <label><input type='radio' value='winter' onChange={this.onKeywordChange} checked={this.props.inputKeyword === 'winter'}/><span>Winter</span></label>
              <br />
            </div>
            <h3 className="title">or choose your own:</h3>
            <input type='text' id='author' placeholder='search by author'/><br />
            <input type='text' id='theme' placeholder='search by theme'/><br />
            <button onClick={this.fetchPoems}>find poems</button>
          </form>
          <p>{poemList}</p>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  poems: PropTypes.object
};

export default SearchForm;
