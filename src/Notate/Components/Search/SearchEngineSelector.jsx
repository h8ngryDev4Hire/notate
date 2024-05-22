import React from 'react';
import { searchEngineProviders } from './searchEngineProviders';

export default function SearchEngineSelector({ onEngineIndexChange }) {
  const [selectedEngineIndex, setSelectedEngineIndex] = React.useState(0);

  const handleClick = () => {
    const nextIndex = (selectedEngineIndex + 1) % searchEngineProviders.length;
    setSelectedEngineIndex(nextIndex);
    onEngineIndexChange(nextIndex);
  };

  const selectedEngine = searchEngineProviders[selectedEngineIndex];

  return (
    <div id="search-engine-selector" className="flex items-center bg-[#2f2f2f] rounded-r-full px-2">
      <button id="search-engine-btn" className="flex items-center bg-transparent border-none cursor-pointer" onClick={handleClick}>
        <img id="search-engine-favicon" className="w-6 h-6" src={selectedEngine.favicon} alt={selectedEngine.name} />
      </button>
    </div>
  );
}
