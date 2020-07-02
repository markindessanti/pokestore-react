import React, { useState, useEffect } from 'react';
import Cartao from '../../components/Cartao/Cartao';
import axios from 'axios';
import './article.css';

const Article = (props) => {
	const [dados, setdados] = useState(null);
	const [erro] = useState(false);

	useEffect(() => {
		let lista = [];
		const resultado = async () => {
			await axios.get('https://pokeapi.co/api/v2/pokemon')
				.then(async (response) => {
					if (response.data.results.length > 0) {
						response.data.results.forEach(async (element) => {
							await axios(element.url)
								.then((response) => {
									lista.push({ id: response.data.id, nome: element.name[0].toUpperCase() +  
										element.name.slice(1) });
								})
								.then(() => {
									if (lista.length > 0) {
										setdados(JSON.stringify(lista));
									}
								});

						});
					}
				})
				.catch(e => console.log('erro', e))
		}
		resultado();
	}, [erro]);

	if (dados) {
		const lista = JSON.parse(dados);
		return (
			<main>
				{
					lista.map(pokemon => {
						const sprite = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
						return <Cartao key={pokemon.id} imagem={sprite} nome={pokemon.nome} />
					})
				}

			</main>
		);
	} else {
		return (
			<main>
				<p>Não foi possível carregar os dados</p>
			</main>
		);
	}
}

export default Article;