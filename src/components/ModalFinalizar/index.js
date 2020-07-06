import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalFinalizar.css';
import compraOK from '../../assets/img/compraFinalizada.png';
import compraFalha from '../../assets/img/compraFalha.png';

const ModalFinalizar = (props) => {
	const {
		buttonLabel,
		className,
		modalFinalizar,
		toggle,
		toggleFinalizar,
		status
	} = props;

	return (
		<div>
			<Modal isOpen={modalFinalizar} toggle={toggleFinalizar} className={className}>
				<ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>POKÉSTORE</ModalHeader>
				<ModalBody>
					{
						(
							() => {
								if (status && modalFinalizar) {
									localStorage.clear();
									const carrinho = { status: false, mensagem: 'Você ainda não selecionou nenhum pokémon para compra', lista: [] };
									localStorage.setItem('carrinho', JSON.stringify(carrinho));

									return (
										<React.Fragment>
											<img className="img-finalizar" src={compraOK} alt="Compra OK - Ash feliz!!!" />
											<p>Obrigado por comprar na Gama Pokéstore!!!</p>
										</React.Fragment>
									)
								} else {
									return (
										<React.Fragment>
											<img className="img-finalizar" src={compraFalha} alt="Compra não concretizada - Pikachu triste..." />
											<p>Você precisa selecionar algum pokémon antes de finalizar a compra...</p>
										</React.Fragment>
									)
								}
							}
						)()
					}
				</ModalBody>
				<ModalFooter>
					<Button className="btn btn-danger" onClick={() => {
						toggle();
						toggleFinalizar();
					  }}>{buttonLabel}</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default ModalFinalizar;  