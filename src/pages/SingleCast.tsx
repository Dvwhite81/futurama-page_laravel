import { Link, useParams } from 'react-router-dom';
import { CastMember, Character } from '../utils/types';
import { getActorImage, getCharacterId, getCharactersByCast, isACharacter } from '../utils/helpers';

interface SingleCastProps {
  cast: CastMember[];
  characters: Character[];
}

const SingleCast = ({ cast, characters }: SingleCastProps) => {
  const { actorId } = useParams();
  const id = Number(actorId);
  const actor = cast.find((person) => person.id === Number(id));
  const voiced = getCharactersByCast(id);
  const imgSrc = getActorImage(id);

  if (!actor || !actorId || !voiced || !imgSrc) return;

  return (
    <div className='page single-cast-page'>
      <div className='card actor-card'>
        <img className='card-img' src={imgSrc} alt='actor' />
        <p>{actor.name}</p>
        <div className='actor-voices'>
          <h4>Main voices:</h4>
          <ul>
            {voiced?.map((voice, index) => (
              <li key={index}>
                <p>
                  {voice}{' '}
                  {isACharacter(voice, characters) && (
                    <Link
                      to={`/characters/${getCharacterId(voice, characters)}`}
                    >
                      <img
                        className='icon'
                        src='/src/assets/images/right-arrow-icon.png'
                        alt='external link icon'
                      />
                    </Link>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCast;
