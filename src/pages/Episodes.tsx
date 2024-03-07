import { Link } from 'react-router-dom';
import { getSeasonEpisode } from '../utils/helpers';
import { Episode } from '../utils/types';

interface EpisodesProps {
  episodes: Episode[];
}

const Episodes = ({ episodes }: EpisodesProps) => {
  console.log('episodes:', episodes);
  return (
    <div className='page'>
      <table className='episodes-table'>
        <thead>
          <tr>
            <td>Season</td>
            <td>Episode</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {episodes.map((e) => {
            const [season, ep] = getSeasonEpisode(e);
            return (
              <tr key={e.number} className='episode-row'>
                <td>{season}</td>
                <td>{ep}</td>
                <Link key={e.number} to={`/episodes/${e.id}`}>
                  <td>{e.title}</td>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Episodes;
