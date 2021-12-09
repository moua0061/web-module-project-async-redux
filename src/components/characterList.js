import React from 'react';
import {connect} from 'react-redux';
import Character from './character';

const CharacterList = (props) => {

    console.log(props)

    return(
        <div>{ 
            props.characters.map(character => {
                return <Character character={character}/>
            })
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterList);