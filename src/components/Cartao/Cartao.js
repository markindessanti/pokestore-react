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
				<CardSubtitle>{props.descricao}</CardSubtitle>
				<CardText><span className="strong">Altura:</span> {props.altura}<br /><span className="strong">Peso</span>: {props.peso}</CardText>
				<div className="preco">
					<CardText>Preço: {props.preco}</CardText>
				</div>
				<div className="div-card-button">
					<Button className="card-button" onClick={
						() => {
							const carrinho = JSON.parse(localStorage.getItem('carrinho'));
							localStorage.clear();
							const carrinhoUpdated= {status: true, lista: [...carrinho.lista, {nome: props.nome, imagem:props.imagem, preco: props.preco}]};
							localStorage.setItem('carrinho', JSON.stringify(carrinhoUpdated));
							alert('O pokémon selecionado foi enviado para o carrinho.')
						}
					}>Enviar para o carrinho</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default Cartao;