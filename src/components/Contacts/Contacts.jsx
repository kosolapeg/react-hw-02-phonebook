import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contactsList: { width: 500 },

  contactItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 240,
    marginBottom: 8,
  },

  button: {
    marginLeft: 20,
    border: '1px solid black',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
});

const Contacts = ({ records, onDelete }) => {
  const classes = useStyles();

  return (
    <ul className={classes.contactsList}>
      {records.map(({ id, name, number }) => (
        <li key={id} className={classes.contactItem}>
          {name}: {number}
          <button
            type="button"
            className={classes.button}
            onClick={() => onDelete(id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
