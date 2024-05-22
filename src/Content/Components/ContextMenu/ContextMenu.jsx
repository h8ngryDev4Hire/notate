import React from 'react';
import HoverRegion from './Components/HoverRegion.jsx';


export const ContextMenuContext = React.createContext()

export default function ContextMenu() {

	return (
		<div>
			<HoverRegion/>
		</div>	
	)
}
