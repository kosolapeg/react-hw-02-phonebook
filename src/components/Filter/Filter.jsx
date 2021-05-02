const Filter = ({ value, onChange }) => {
  return (
    <label>
      Search by name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
