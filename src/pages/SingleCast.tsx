import { useParams } from 'react-router-dom';
import { CastMember } from '../utils/types';
import { getActorImage, getCharactersByCast } from '../utils/helpers';

interface SingleCastProps {
  cast: CastMember[];
}

const SingleCast = ({ cast }: SingleCastProps) => {
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
            {voiced?.map((voice, index) =>
              <li key={index}>
                <p>{voice}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCast;
