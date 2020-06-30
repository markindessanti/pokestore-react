import React from 'react';
import Cartao from '../../components/Card/Cartao';
import { Container } from 'reactstrap';
import './article.css';

import imagem from '../../assets/img/318x180.png';

class Article extends React.Component {
	render() {
		return (
			<Container>
				<main>
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
					<Cartao imagem={imagem} />
				</main>
			</Container>
		);
	}
}

export default Article;