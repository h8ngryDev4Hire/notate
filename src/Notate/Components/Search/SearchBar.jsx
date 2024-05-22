import React from 'react';
import SearchEngineSelector from './SearchEngineSelector.jsx';
import { searchEngineProviders } from './searchEngineProviders.js';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedEngineIndex, setSelectedEngineIndex] = React.useState(0);
	const [barActiveStatus, setStatus] = React.useState(false)

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = () => {
    const currentSearchEngine = searchEngineProviders[selectedEngineIndex];

    if (searchTerm !== '') {
      const URL = currentSearchEngine.URLPrefix + encodeURIComponent(searchTerm);
      window.location.href = URL;
    }
  };

  const handleEngineIndexChange = (index) => {
    setSelectedEngineIndex(index);
  };

	const handleSearchBarActiveState = () => {
		setStatus(!barActiveStatus)
	}

	React.useEffect(() => {
	    const handleClickOutside = (event) => {
	      if (
	        event.target.id !== 'searchInput' &&
	        !event.target.closest('#search-bar-container')
	      ) {
	        setStatus(false);
	      }
	    };
	
	    document.addEventListener('click', handleClickOutside);
	
	    return () => {
	      document.removeEventListener('click', handleClickOutside);
	    };
	  }, []);

  return (
    <div id="search-bar-container" 
	  className={`flex justify-center mb-7 rounded-full border  ${barActiveStatus ? 'border-red-300' : 'border-transparent' }`}
	  onClick={handleSearchBarActiveState}>
      <input
        type="text"
        id="searchInput"
	className="flex-grow px-4 py-3 text-base rounded-l-full bg-[#2f2f2f] text-[#e0e0e0] focus:outline-none"
        placeholder="Your Conquest for Knowledge begins here..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <SearchEngineSelector onEngineIndexChange={handleEngineIndexChange} />
    </div>
  );
}
