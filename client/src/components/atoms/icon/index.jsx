import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';

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
      return <MultilineChartIcon />
    default:
      return null;
  }
};

export default Icon;
