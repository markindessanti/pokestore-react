import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalCarrinho.css';
import ListaCarrinho from '../ListaCarrinho/index';
import ButtonModalFinalizar from '../ModalFinalizar/ButtonModalFinalizar';

const ModalCarrinho = (props) => {
	const {
		buttonLabel,
		className,
		modal,
		toggle
	} = props;

	const [total, setTotal] = useState(0);
	const totalizar = (total) => {
		setTotal(total)
	}

	return (
		<React.Fragment>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>CARRINHO POKÉMON</ModalHeader>
				<div className="container-inline">
					{/** Essas divs não podem ser indentadas, pois se o fizermos, não ficam lado a lado */}
					<div className="div-inline">Pokémon</div><div className="div-inline">Preço</div>
				</div>
				<ModalBody>
					<ListaCarrinho totalizar={totalizar} />
				</ModalBody>
				<div className="container-inline">
					<div className="div-inline">Total</div><div className="div-inline">{total.toFixed(2).toString().replace('.', ',')}</div>
				</div>
				<ModalFooter>
					<ButtonModalFinalizar toggle={toggle} buttonLabel={buttonLabel} color="primary">{buttonLabel}</ButtonModalFinalizar>
					<Button className="btn btn-danger" onClick={toggle}>Fechar</Button>
				</ModalFooter>
			</Modal>
		</React.Fragment>
	);
}

export default ModalCarrinho;  