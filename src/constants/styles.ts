import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexGrow: 1,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    padding: 8,
  },
  card: {
    padding: 16,
    marginBottom: 16,
    maxWidth: 600,
  },
  filterContainer: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
});
