const Search = ({ searchStr, searchHandler }) => {
  return (
    <>
      <input id="search" type="text" placeholder="Chercher..." value={searchStr} onChange={searchHandler} />
      <hr />
    </>
  );
};
export default Search;
