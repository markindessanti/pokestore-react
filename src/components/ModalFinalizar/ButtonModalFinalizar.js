import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ModalFinalizar from '../ModalFinalizar';
import "./modalFinalizar.css";

const ButtonModalFinalizar = (props) => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	const carrinho = JSON.parse(localStorage.getItem('carrinho'));
	
	const statusCarrinho = carrinho.status;

	return (
		<React.Fragment>
			<Button color="primary" className="btn" onClick={toggle}>{props.buttonLabel}</Button>
			<ModalFinalizar buttonLabel="Fechar" status={statusCarrinho} className="modal-finalizar" modal={modal} toggle={toggle} />
		</React.Fragment>
	);
}

export default ButtonModalFinalizar;  