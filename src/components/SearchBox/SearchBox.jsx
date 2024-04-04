const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div>
      <input
        onChange={e => setSearchInput(e.target.value)}
        value={searchInput}
        type="text"
        placeholder="Enter smth"
      />
    </div>
  );
};

export default SearchBox;
