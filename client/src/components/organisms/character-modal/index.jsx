import { useQuery } from '@apollo/client';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from '../../atoms';
import { ListWithIcons } from '../../molecules';
import { CHARACTER_QUERY } from '../../../shared/api/character-api';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const CharacterModal = ({ id, openModal, closeModal }) => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id,
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const { character } = data;

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
    >
      <div className={classes.paper}>
        <ListWithIcons
          items={[
            { key: 'status', icon: <Icon name="favorite" />, text: character.status },
            { key: 'species', icon: <Icon name="person" />, text: character.species },
            { key: 'location', icon: <Icon name="location" />, text: character.currentLocation?.name ?? 'UNKNOWN' },
            { key: 'origin', icon: <Icon name="home" />, text: character.origin?.name ?? 'UNKNOWN' },
          ]}
        />
      </div>
    </Modal>
  );
};

export default CharacterModal;
