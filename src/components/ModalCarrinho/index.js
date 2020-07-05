import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalCarrinho.css';
import ListaCarrinho from '../ListaCarrinho/index';

const ModalCarrinho = (props) => {
	const {
		buttonLabel,
		className,
		modal,
		toggle
	} = props;

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader cssModule={{'modal-title': 'w-100 text-center'}}>CARRINHO POKÉMON</ModalHeader>
				<div className="container-inline">
					{/** Essas divs não podem ser indentadas, pois se o fizermos, não ficam lado a lado */}
					<div className="div-inline">Pokémon</div><div className="div-inline">Preço</div>
				</div>
				<ModalBody>
					<ListaCarrinho />
				</ModalBody>
				<div className="container-inline">
					<div className="div-inline">Total</div><div className="div-inline">999999,00</div>
				</div>
				<ModalFooter>
					<Button color="primary">{buttonLabel}</Button>
					<Button className="btn btn-danger" onClick={toggle}>Fechar</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default ModalCarrinho;  