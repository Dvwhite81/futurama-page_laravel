import { useParams } from 'react-router-dom';
import { Episode } from '../utils/types';
import { getSeasonEpisode } from '../utils/helpers';

interface SingleEpisodeProps {
  episodes: Episode[]
}

const SingleEpisode = ({ episodes }: SingleEpisodeProps) => {
  const { episodeId } = useParams();
  const id = Number(episodeId);
  const episode = episodes.find((e) => e.id === id);
  console.log('episodeId:', episodeId);
  console.log('id:', id);
  console.log('episode:', episode);
  if (!episode) return;

  const { desc, originalAirDate, title, writers } = episode;
  const [season, ep] = getSeasonEpisode(episode);

  return (
    <div className="page single-episode-page">
      <div className="card episode-card">
        <p>Season {season} Episode {ep} Air Date: {originalAirDate}</p>
        <p>{title}</p>
        <p>Written by {writers}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleEpisode;
