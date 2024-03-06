import { Episode } from '../utils/types';

interface EpisodesProps {
  episodes: Episode[];
}

const Episodes = ({ episodes }: EpisodesProps) => {
  return (
    <div className="page">
      {episodes.map((ep) =>
        <p key={ep.id}>{ep.title}</p>
      )}
    </div>
  );
};

export default Episodes;
