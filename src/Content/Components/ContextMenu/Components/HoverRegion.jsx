import React from 'react';
import ContextMenuButton from './ContextMenuItems/ContextMenuButton.jsx'


export default function HoverRegion() {

	return (
				<div id="hover-region"
					className="fixed flex bottom-0 right-0 size-[7rem] items-center justify-center group">
					<div id="context-menu-items"
						className="w-20 h-60 flex flex-col items-center justify-center">
						<ContextMenuButton/>
					</div>
				</div>
	)
}
