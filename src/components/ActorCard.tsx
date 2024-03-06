import { getActorImage } from '../utils/helpers';
import { CastMember } from '../utils/types';

interface ActorCardProps {
  actor: CastMember;
}

const ActorCard = ({ actor }: ActorCardProps) => {
  const imgSrc = getActorImage(actor.id);
  return (
    <div className="card actor-card">
      <img className='card-img' src={imgSrc} alt='actor' />
      <p>{actor.name}</p>
    </div>
  );
};

export default ActorCard;
