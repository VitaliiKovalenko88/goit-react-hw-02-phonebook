export const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input value={value} onChange={onChange} />
    </>
  );
};
