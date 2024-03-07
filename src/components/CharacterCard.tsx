import { Character } from '../utils/types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, images } = character;
  const { main } = images;
  return (
    <div className='card character-card'>
      <img className='card-img' src={main} alt='character' />
      <p>{name.first} {name.last}</p>
    </div>
  );
};

export default CharacterCard;
