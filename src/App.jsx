import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Notate from '@notate/Notate.jsx'
import Loading from '@universal/Components/Loading/AppLoading.jsx'

import DevTools from '@dev/devutils.js'


/*
 * DevTool Call
*/
DevTools()


/* Application Entry Point */
const root  = document.getElementById('root');


function App() {
	return (
	<StrictMode>
		<Suspense fallback={<Loading/>}>
		<Notate/>
		</Suspense>
	</StrictMode>

	)
}


ReactDOM.createRoot(root).render(
	<App/>
);
