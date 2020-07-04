import React, { useState, useEffect } from 'react';
import Cartao from '../../components/Cartao/Cartao';
import axios from 'axios';
import './article.css';

const Article = (props) => {
	const [dados, setdados] = useState(null);
	const [erro] = useState(false);

	useEffect(() => {
		let lista = [];
		let listaCards = [];
		const resultado = async () => {
			await axios.get('https://pokeapi.co/api/v2/pokemon')
				.then(async (response) => {
					if (response.data.results.length > 0) {
						response.data.results.forEach(async (element) => {
							await axios(element.url)
								.then((response) => {
									return {
										id: response.data.id,
										nome: element.name[0].toUpperCase() + element.name.slice(1),
										altura: (parseInt(response.data.height) * 10).toString() + ' cm',
										peso: ((parseInt(response.data.weight) * 100) / 1000).toString().replace('.', ',') + ' kg',
										sprite: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`
									};
								})
								.then(async (response) => {
									await axios(`https://pokeapi.co/api/v2/pokemon-species/${response.id}/`)
										.then((item) => {
											const descricao = { descricao: (item.data.flavor_text_entries[0].flavor_text).replace(/\n/g, ' ').replace(/\f/g, ' ') };
											item = Object.assign(response, descricao);
											return item;
										})
										.then((response) => {
											lista.push(
												response
											)
											console.log(lista);
											if (lista.length === 20) {
												listaCards = lista;
												console.log(listaCards);
											}
											setdados(response);
										})
								})
							// .then((response) => {
							// 	listaCards.push(
							// 		<Cartao key={response.id}
							// 			imagem={response.sprite}
							// 			nome={response.nome}
							// 			altura={(parseInt(response.altura) * 10).toString() + ' cm'}
							// 			peso={((parseInt(response.peso) * 100) / 1000).toString().replace('.', ',') + ' kg'}
							// 			descricao={response.descricao} />
							// 	);
							// 	console.log(response);
							// 	if (response.length === 20) {
							// 		setdados(JSON.stringify(response));
							// 	}
							// });

						});
					}
				})
				.catch(e => console.log('erro', e))
		}
		resultado();
	}, [erro]);

	// console.log(dados);s
	if (dados) {
		return (
			<main>
				<Cartao key={dados.id}
					imagem={dados.sprite}
					nome={dados.nome}
					altura={dados.altura}
					peso={dados.peso}
					descricao={dados.descricao} />
			</main>
		)
	} else 

	{return (
		<main>
			<p>Não foi possível carregar os dados</p>
		</main>
	);}
}

export default Article;