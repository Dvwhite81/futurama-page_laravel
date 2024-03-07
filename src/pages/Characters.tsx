import { Link } from 'react-router-dom';
import { Character } from '../utils/types';
import CharacterCard from '../components/CharacterCard';

interface CharactersProps {
  characters: Character[];
}

const Characters = ({ characters }: CharactersProps) => {
  console.log('characters:', characters);
  return (
    <div id='characters-page' className='grid-page'>
      {characters.map((char) =>
        <Link key={char.id} to={`/characters/${char.id}`}>
          <CharacterCard key={char.id} character={char} />
        </Link>
      )}
    </div>
  );
};

export default Characters;
