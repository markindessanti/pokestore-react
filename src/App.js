import React, { useState } from 'react';
import Routes from './routes';


const App = () => {
	const [trocaDePagina, setTrocaDePagina] = useState(false);

	return (
		<React.Fragment>
			<Routes trocaDePagina={trocaDePagina} setTrocaDePagina={setTrocaDePagina} />
		</React.Fragment>
	);
}

export default App;