import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ModalFinalizar from '../ModalFinalizar';
import "./modalFinalizar.css";

const ButtonModalFinalizar = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<React.Fragment>
			<Button className="btn" onClick={toggle} />
			<ModalFinalizar buttonLabel="Fechar" className="modal-finalizar" modal={modal} toggle={toggle} />
		</React.Fragment>
	);
}

export default ButtonModalFinalizar;  