import React, { useState } from 'react';
import ModalCarrinho from '../ModalCarrinho';
import "./modalCarrinho.css";

const ButtonModal = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<React.Fragment>
			<div className="fab" onClick={toggle}>
				<i className="fa fa-shopping-cart fa-sm my-fab"></i>
				<span className="tooltiptext">SEU CARRINHO</span>
			</div>
			<ModalCarrinho buttonLabel="Finalizar Compra" className="modal-carrinho" modal={modal} toggle={toggle} />
		</React.Fragment>
	);
}

export default ButtonModal;  