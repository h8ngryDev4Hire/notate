
export const NormalModeCmds = [
	{
		type: 'paste',
		name: 'Paste',
    		action: () => {
      			document.execCommand('paste');
    		}
  	},{
    		type: 'selectAll',
		name: 'Select All',
    		action: () => {
			const range = document.createRange()
			const fallback = document.getElementById('content-script-entry-point')
				?.shadowRoot?.getElementById('input-text-display')
			const target = document.getElementById('input-text-display') || fallback

			range.selectNodeContents(target)

			const selection = window.getSelection()

			selection.removeAllRanges()
			selection.addRange(range)
    		}
  	},{
    		type: 'undo',
		name: 'Undo',
    		action: () => {
      			document.execCommand('undo');
    		}
  	},{
    		type: 'redo',
		name: 'Redo',
    		action: () => {
      			document.execCommand('redo');
    		}
  	},
	{
		type: 'insertImg',
		name: 'Insert Image',
		action: () => {
			const input = document.createElement('input');
    			input.type = 'file';
    			input.accept = 'image/*';

    			input.onchange = (event) => {
      				const file = event.target.files[0];

      				if (file) {
        				const reader = new FileReader();
        				reader.onload = (e) => {
          					const img = document.createElement('img');
          					img.src = e.target.result;
          					img.style.maxWidth = '100%';
          					document.execCommand('insertHTML', false, img.outerHTML);
        				};

        				reader.readAsDataURL(file);
      				}
    			};

    			input.click();
		}
	}
];


export const SelectionModeCmds = [
	{
    		type: 'cut',
		name: 'Cut',
    		action: () => {
      			document.execCommand('cut');
    		}
  	},{
    		type: 'copy',
		name: 'Copy',
    		action: () => {
      			document.execCommand('copy');
    		}
  	},{
    		type: 'delete',
		name: 'Delete',
    		action: () => {
      			document.execCommand('delete');
		}
  	},{
    		type: 'bold',
		name: 'Bold',
    		action: () => {
      			document.execCommand('bold');
    		}
  	},{
    		type: 'italic',
		name: 'Italic',
    		action: () => {
      			document.execCommand('italic');
		}
  	},{
    		type: 'underline',
		name: 'Underline',
    		action: () => {
      			document.execCommand('underline');
    		}
  	}
];
