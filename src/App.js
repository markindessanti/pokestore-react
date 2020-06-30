import React from 'react';
import Header from './pages/Header/Header';
import Article from './pages/Article/Article';
import Footer from './pages/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Article />
				<Footer />
			</div>
		);
	}
}

export default App;