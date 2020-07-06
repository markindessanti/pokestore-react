import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ModalFinalizar from '../ModalFinalizar';
import "./modalFinalizar.css";

const ButtonModalFinalizar = (props) => {
	const [modalFinalizar, setModalFinalizar] = useState(false);
	const toggleFinalizar = () => setModalFinalizar(!modalFinalizar);

	const carrinho = JSON.parse(localStorage.getItem('carrinho'));

	const statusCarrinho = carrinho.status;
	const toggle = props.toggle;

	return (
		<React.Fragment>
			<Button color="primary" className="btn" onClick={toggleFinalizar}>{props.buttonLabel}</Button>
			<ModalFinalizar buttonLabel="Fechar" status={statusCarrinho} className="modal-finalizar" modalFinalizar={modalFinalizar} toggleFinalizar={toggleFinalizar} toggle={toggle} />
		</React.Fragment>
	);
}

export default ButtonModalFinalizar;  