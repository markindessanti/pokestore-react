import React from 'react';
import Routes from './routes';
import ModalCarrinho from './components/ModalCarrinho';

class App extends React.Component {
	render() {
		return (
			<div>
				<Routes />
				<ModalCarrinho buttonLabel="Finalizar compra" className="modal-carrinho" />
			</div>
		);
	}
}

export default App;