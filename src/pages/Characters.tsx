import { Character } from '../utils/types';

interface CharactersProps {
  characters: Character[];
}

const Characters = ({ characters }: CharactersProps) => {
  return (
    <div className="page">
      {characters.map((char) =>
        <p key={char.id}>{char.name.first}</p>
      )}
    </div>
  );
};

export default Characters;
