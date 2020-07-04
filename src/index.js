import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import App from './App';
import Footer from './pages/Footer';
import FloatingButton from './components/FloatingButton';

ReactDOM.render(
		<Header />,
	document.getElementById('header')
);

ReactDOM.render(	
		<App />,
	document.getElementById('article')
);

ReactDOM.render(	
		<Footer />,
	document.getElementById('footer')
);

ReactDOM.render(	
		<FloatingButton />,
	document.getElementById('floatingButton')
);
