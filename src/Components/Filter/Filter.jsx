const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </>
  );
};

export default Filter;
