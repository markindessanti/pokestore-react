import React from 'react';
import Cartao from '../../components/Cartao/Cartao';
import './article.css';

import imagem from '../../assets/img/318x180.png';

class Article extends React.Component {
	render() {
		return (
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
		);
	}
}

export default Article;