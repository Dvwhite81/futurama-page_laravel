import { Link } from 'react-router-dom';
import { getSeasonEpisode } from '../utils/helpers';
import { Episode } from '../utils/types';

interface EpisodesProps {
  episodes: Episode[];
}

const Episodes = ({ episodes }: EpisodesProps) => {
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
                <td>
                  <Link key={e.number} to={`/episodes/${e.id}`}>
                    {e.title}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Episodes;
