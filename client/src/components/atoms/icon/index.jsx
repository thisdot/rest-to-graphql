import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import HomeIcon from '@material-ui/icons/Home';

const Icon = ({ name }) => {
  switch (name) {
    case 'favorite':
      return <FavoriteIcon />;
    case 'person':
      return <PersonIcon />;
    case 'location':
      return <LocationOnIcon />;
    case 'globe':
      return <PublicIcon />;
    case 'dimension':
      return <MultilineChartIcon />;
    case 'home':
      return <HomeIcon />;
    default:
      return null;
  }
};

export default Icon;
