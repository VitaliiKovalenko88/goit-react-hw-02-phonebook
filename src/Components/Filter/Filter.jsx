import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
