import React from 'react';
// import imagem from '../../assets/img/318x180.svg';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './cartao.css';

const Cartao = (props) => {
	console.log(props.imagem);
	return (
		<Card>
			<CardImg src={props.imagem} alt="Card image cap" />
			<CardBody>
				<CardTitle>Card title</CardTitle>
				<CardSubtitle>Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				<Button>Button</Button>
			</CardBody>
		</Card>
	);
};

export default Cartao;