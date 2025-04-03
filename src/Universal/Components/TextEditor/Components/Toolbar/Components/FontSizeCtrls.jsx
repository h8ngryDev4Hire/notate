import React from 'react';

export default function FontSizeCtrls() {
  const fontSizes = [1, 2, 3, 4, 5, 6, 7];

  const handleFontSizeChange = (size) => {
    document.execCommand('fontSize', false, size);
  };

  React.useEffect(()=>{
	const initialFontSize = fontSizes[6]
	handleFontSizeChange(initialFontSize);
  },[])

  return (
    <div id="font-size-controls" className="flex items-center h-6">
      <select
	defaultValue={7}
        className="px-2 py-1 text-[.7rem] h-6 text-center rounded bg-inherit backdrop-filter backdrop-brightness-[.80] outline-none cursor-pointer"
        onChange={(e) => handleFontSizeChange(e.target.value)}
      >
        {fontSizes.map((size) => {
		return (
          <option key={size} value={size} className="h-6">
            {size}
          </option>
        )})}
      </select>
    </div>
  );
}

/*
	flex items-center justify-center size-6 p-1 text-sm rounded   
*/
