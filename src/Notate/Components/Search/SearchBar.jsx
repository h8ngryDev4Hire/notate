import React from 'react';
import browser from 'webextension-polyfill'

export const BarStatusContext = React.createContext()

export default function SearchBar({ onSearch }) {
	const [selectedEngineIndex, setSelectedEngineIndex] = React.useState('google'); 
  	const [searchTerm, setSearchTerm] = React.useState('');
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

 // const performSearch = () => {
 //   const currentSearchEngine = searchEngineProviders[selectedEngineIndex];

 //   if (searchTerm !== '') {
 //     const URL = currentSearchEngine.URLPrefix + encodeURIComponent(searchTerm);
 //     window.location.href = URL;
 //   }
 // };
	const performSearch = () => {
		if (searchTerm !== '') {
			browser.search.query( { text: searchTerm } )
		}
	}


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
	      } else setStatus(true)
	    };
	
	    document.addEventListener('click', handleClickOutside);
	

	  }, []);


  return (
	<div 
	 id="search-bar-container" 
	 className="relative w-[50vw] self-center"
	 onClick={handleSearchBarActiveState}
	>

		<div 
	  	 id="external"
		 className={`
			 absolute blur-xl rounded-xl inset-0 
			 ${ barActiveStatus ? "bg-red-300" : "bg-transparent" }
		`}/>

		<div 
		 id="internal"
		 className={`
		 relative trans-ease flex max-w-[50rem] mx-auto justify-center rounded-full border  
		 ${barActiveStatus ? 'border-red-400' : 'border-transparent' }
		`}>
			<input
			 type="text"
		         id="searchInput"
		 	 className={`
				 trans-ease flex-grow px-4 py-3 text-base rounded-full 
				 placeholder:playfair-regular placeholder:font-mono  
				 ${barActiveStatus 
						 ? "bg-[#333333]" 
						 : "bg-[#595959]" } 
				 text-[#e0e0e0] focus:outline-none
			 `}
		         placeholder="Your Conquest for Knowledge begins here..."
		         value={searchTerm}
		         onChange={handleInputChange}
		         onKeyPress={handleKeyPress}
		  	/>
	
			  <BarStatusContext.Provider value={[ barActiveStatus ]}>
			  </BarStatusContext.Provider>
	
		</div>
	</div>
  );
}



