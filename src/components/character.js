import React from 'react';

const Character =(props) => {
    const { character } = props;
    return(
        <div className='character-card'>
      <img src={props.character.image}/>
        <h3>My name is&nbsp;{props.character.name}</h3>
        <h3>I am from {props.character.location.name}</h3>
        <h3>I am {props.character.species}</h3>
      </div>
    )
}

export default Character;