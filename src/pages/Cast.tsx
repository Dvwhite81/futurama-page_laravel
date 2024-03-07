import { Link } from 'react-router-dom';
import { CastMember } from '../utils/types';
import ActorCard from '../components/ActorCard';

interface CastProps {
  cast: CastMember[];
}

const Cast = ({ cast }: CastProps) => {
  return (
    <div id='cast-page' className='grid-page'>
      {cast.map((person) => (
        <Link key={person.id} to={`/cast/${person.id}`}>
          <ActorCard actor={person} />
        </Link>
      ))}
    </div>
  );
};

export default Cast;
