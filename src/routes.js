import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Article from './pages/Article';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ButtonModal from './components/ModalCarrinho/ButtonModal';

function Routes(props) {
	const [trocaDePagina, setTrocaDePagina] = useState(false);

	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					render={
						props =>
							<React.Fragment>
								<div className="bg-warning jumbotron">
									<Header />
								</div>
								<div className="container">
									<Article {...props} trocaDePagina={trocaDePagina} setTrocaDePagina={setTrocaDePagina} />
								</div>
								<div className="jumbo-footer jumbotron">
									<Footer />
								</div>
								<React.Fragment>
									<ButtonModal />
								</React.Fragment>
							</React.Fragment>
					}
					trocaDePagina={trocaDePagina}
					setTrocaDePagina={setTrocaDePagina}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;