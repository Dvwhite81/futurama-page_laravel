import { CastMember } from '../utils/types';

interface CastProps {
  cast: CastMember[];
}

const Cast = ({ cast }: CastProps) => {
  if (!cast.every((obj) => obj['name'] !== undefined)) {
    return;
  }

  return (
    <div className='page'>
      {cast.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  );
};

export default Cast;
