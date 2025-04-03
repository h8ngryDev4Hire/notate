import { TEXT_EDITOR_ID } from './TextInput.jsx'

export const uniqueId = (prefix) => {
     	return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};


export const links = (text) => {
 	const urlRegex = /(https?:\/\/[^\s<]+)/g;
    	const product = text.replace(urlRegex, '<a href="$1">$1</a>');
    	return product
};


export const textContent = (element) => {
	if (element instanceof HTMLElement) {
		const children = element.children

		element.style.color = 'inherit'

		if (children?.length > 0) {
			Array.from(children).forEach( child => textContent(child) )
		}
	}
}


export const imageAtCursor = (imgElement, root, ref, setText, dropTarget) => {
	if (dropTarget.id === TEXT_EDITOR_ID) {
		dropTarget.appendChild(imgElement)
	} else if (dropTarget && dropTarget.parentNode) {
        	// Insert after the drop target
        	if (dropTarget.nextSibling) {
            		dropTarget.parentNode.insertBefore(imgElement, dropTarget.nextSibling);
        	} else {
            		dropTarget.parentNode.appendChild(imgElement);
        	}
    	} else {
        	// Fallback to original behavior if no drop target
        	const selection = root.getSelection();
        	if (selection.rangeCount > 0) {
            		const range = selection.getRangeAt(0);
            		range.deleteContents();
            		range.insertNode(imgElement);
            		range.collapse(false);
        	} else {
            		ref.current.appendChild(imgElement);
        	}
    	}

    	setText(ref.current.innerHTML);
};
