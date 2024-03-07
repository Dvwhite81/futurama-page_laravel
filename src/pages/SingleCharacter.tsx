import { useParams } from 'react-router-dom';
import { Character } from '../utils/types';

interface SingleCharacterProps {
  characters: Character[];
}

const SingleCharacter = ({ characters }: SingleCharacterProps) => {
  const { characterId } = useParams();
  const id = Number(characterId);
  const character = characters.find((person) => person.id === Number(id));

  if (!character || !characterId) return;

  const { images, name, occupation, sayings, species } = character;
  const { main } = images;
  const { first, middle, last } = name;
  return (
    <div className='page single-character-page'>
      <div className='card character-card'>
        <img className='card-img' src={main} alt='actor' />
        <div className='character-details'>
          <p className='detail'>
            <span className='right'>
              <u>Name:</u>
            </span>
            <span className='center'>
              {first} {middle} {last}
            </span>
          </p>
          <p className='detail'>
            {' '}
            <span className='right'>
              <u>Species:</u>
            </span>
            <span className='center'>{species}</span>
          </p>
          <p className='detail'>
            {' '}
            <span className='right'>
              <u>Occupation:</u>
            </span>
            <span className='center'>{occupation}</span>
          </p>
        </div>
        <div className='sayings'>
          <h4>
            <u>Sayings:</u>
          </h4>
          {sayings.map((quote, index) => (
            <p key={index}>{quote}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
