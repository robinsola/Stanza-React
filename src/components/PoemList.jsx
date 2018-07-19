import React from 'react';

class PoemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poemList: [],
      requestFiled: false
    }
  }

  componentDidMount() {
    console.log('test');
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://poetrydb.org/author,title/;death')
    .then(response => {
      if (!response.ok) {
        throw Error('Sorry, request has failed')
      }
      return response
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        poemList: data
      })
    }, () => {
      this.setState({
        requestFailed: true
      })
    })
  }

  render() {

    if(this.state.requestFailed) return <p>failed!</p>
    if(!this.state.poemList) return <p>Loading...</p>

    const searchResults = this.state.poemList.map(poem => (
      <div key={poem.id}>
        <h2>{poem.title}</h2>
        <h4>{poem.author}</h4>
        <p>{poem.lines}</p>
      </div>
    ))
    return (
      <div>
        <p>Poem list: Search results from api call</p>
        {searchResults}
      </div>
    );
  }
}

export default PoemList;
