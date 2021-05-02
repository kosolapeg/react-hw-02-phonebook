const Contacts = ({ records }) => {
  return (
    <ul>
      {records.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
