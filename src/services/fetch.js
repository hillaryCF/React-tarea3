import React from 'react';
import axios from 'axios';
import Title from '../components/title';
import '../fetch.css';


class Characters extends React.Component {
  state = {
    charactersRick: []
  }
  componentDidMount() {

    axios.get('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
      .then(res => {
        const charactersRick = res.data._embedded.episodes;
        console.log(charactersRick);
        this.setState({ charactersRick });
    })
  }
  render() {
    return (
      <div>
        { this.state.charactersRick.map(characterName => <h3 className='character-list-name'>{characterName.name}</h3>)}
        { this.state.charactersRick.map(characterImage => <img src={characterImage.image.medium} className='character-list-image'></img>)}
      </div>
    )
  }
}

export default Characters;

