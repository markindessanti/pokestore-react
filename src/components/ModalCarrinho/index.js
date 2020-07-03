import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalCarrinho.css';

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
				<ModalHeader style={{ 'backgroundColor': "#0062cc" }} color="primary" toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.
              </ModalBody>
				<ModalFooter>
					<Button color="primary">{buttonLabel}</Button>
					<Button className="btn btn-danger" onClick={toggle}>Fechar</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default ModalCarrinho;  