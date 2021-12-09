import React, {useEffect} from 'react';
import './App.css';
import { getCharacter } from './actions';
import CharacterList from './components/characterList';
import {connect} from 'react-redux';


  // axios.get('')
  //   .then(resp => {
  //     console.log(resp.data.results)
  //   })
  //   .catch(err=> {
  //     console.log('your shit aint working')
  //   })

  

function App(props) {

  useEffect(() => {
    props.getCharacter()
  },[])

  

  // console.log(props)
  return (
    <div className="App">
      <h1>WE LOVE RICK AND MORTY</h1>
      <h2>Get information on the characters! </h2>
      <CharacterList />
      <div className='character-card'>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        <h3>My name is&nbsp; rick</h3>
        <h3>gender:</h3>
        <h3>i was in episode</h3>
      </div>
    </div>
  );
}


export default connect(null, {getCharacter})(App);