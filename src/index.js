import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import App from './App';
import Footer from './pages/Footer';
import FloatingButton from './components/FloatingButton';

ReactDOM.render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>,
	document.getElementById('header')
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('article')
);

ReactDOM.render(
	<React.StrictMode>
		<Footer />
	</React.StrictMode>,
	document.getElementById('footer')
);

ReactDOM.render(
	<React.StrictMode>
		<FloatingButton />
	</React.StrictMode>,
	document.getElementById('floatingButton')
);
