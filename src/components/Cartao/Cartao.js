import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './cartao.css';

const Cartao = (props) => {
	return (
		<Card>
			<CardImg src={props.imagem} alt="Card image cap" />
			<CardBody>
				<CardTitle>{props.nome}</CardTitle>
				<CardSubtitle>Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<div className="div-card-button">
					<Button className="card-button">Enviar para o carrinho</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default Cartao;