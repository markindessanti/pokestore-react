import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalFinalizar.css';

const ModalFinalizar = (props) => {
	const {
		buttonLabel,
		className,
		modal,
		toggle
	} = props;

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>POKÉSTORE</ModalHeader>
				<ModalBody>
					Obrigado por comprar conosco
				</ModalBody>
				<ModalFooter>
					<Button className="btn btn-danger" onClick={toggle}>{buttonLabel}</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default ModalFinalizar;  