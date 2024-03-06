import { Character } from '../utils/types';

interface CharactersProps {
  characters: Character[];
}

const Characters = ({ characters }: CharactersProps) => {
  console.log('characters:', characters);
  return (
    <div className="page">
      {characters.map((char) =>
        <p key={char.id}>{char.name.first} {char.name.last}</p>
      )}
    </div>
  );
};

export default Characters;
