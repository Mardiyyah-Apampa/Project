import './SearchBar.css';

function SearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for orders..." />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;
