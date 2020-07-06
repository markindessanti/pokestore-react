import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Cartao from '../../components/Cartao/Cartao';
import './article.css';

const initListaInfo = {
	id: null,
	nome: null,
	altura: null,
	peso: null,
	sprite: null
};

function Article() {
	const [urlFetch, setUrlFetch] = useState('https://pokeapi.co/api/v2/pokemon');
	const [dados, setDados] = useState(null);
	const [listaInfo, setListaInfo] = useState(initListaInfo);
	const [dadosFinal, setDadosFinal] = useState(null);
	const listaEmptCards = [0, 1, 2, 3];

	useEffect(() => {
		async function getDados() {
			const response = await fetch(urlFetch);
			const json = await response.json();
			setDados(json);
		}
		getDados();
		const carrinho = { status: false, mensagem: 'Você ainda não selecionou nenhum pokémon para compra', lista: [] };
		localStorage.setItem('carrinho', JSON.stringify(carrinho));
	}, [urlFetch])

	useEffect(() => {
		let lista = [];
		if (dados) {
			dados.results.forEach(async (item) => {
				const response = await fetch(item.url);
				const json = await response.json();
				const result = {
					id: json.id,
					nome: json.name[0].toUpperCase() + json.name.slice(1),
					altura: (parseInt(json.height) * 10).toString() + ' cm',
					peso: ((parseInt(json.weight) * 100) / 1000).toString().replace('.', ',') + ' kg',
					sprite: `https://pokeres.bastionbot.org/images/pokemon/${json.id}.png`,
					preco: (((parseInt(json.height) * 2) + (parseInt(json.weight) / 4)) * 2).toFixed(2).toString().replace('.', ','),
					previous: dados.previous,
					next: dados.next
				}

				lista.push(result);

				if (lista.length === 20) {
					setListaInfo(lista);
				}

			})
		}
	}, [dados]);

	useEffect(() => {
		let lista = [];
		if (listaInfo.length === 20) {
			listaInfo.forEach(async (item) => {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${item.id}/`);
				const json = await response.json();
				const descricao = { descricao: (json.flavor_text_entries[0].flavor_text).replace(/\n/g, ' ').replace(/\f/g, ' ') };

				lista.push(Object.assign(item, descricao))

				if (lista.length === 20) {
					setDadosFinal(JSON.stringify(lista));
				}
			})
		}
	}, [dados, listaInfo]);

	if (dadosFinal) {
		const listaFinal = JSON.parse(dadosFinal)
		return (
			<React.Fragment>
				<div className="container navigation-top">
					{
						(
							() => {
								if (dados.previous) {
									return(
										<Button className="btn-voltar" color="info" onClick={() => setUrlFetch(dados.previous)}>Voltar</Button>
									)
								}
							}
						)()
					}
					{
						(
							() => {
								if (dados.next) {
									return(
										<Button className="btn-avancar" color="info" onClick={() => setUrlFetch(dados.next)}>Avançar</Button>
									)
								}
							}
						)()
					}
				</div>
				<main>
					{
						listaFinal.map((item) => {
							return (
								<Cartao key={item.id}
									imagem={item.sprite}
									nome={item.nome}
									altura={item.altura}
									peso={item.peso}
									descricao={item.descricao}
									preco={item.preco} />
							)
						})
					}

					{
						listaEmptCards.map((item) => {
							return (
								<Cartao classe='card-hidden' key={item} imagem="" nome="" altura="" peso="" descricao="" preco="" />
							)
						})
					}
				</main>
				<div className="container navigation-bottom">
					{
						(
							() => {
								if (dados.previous) {
									return(
										<Button className="btn-voltar" color="info" onClick={() => setUrlFetch(dados.previous)}>Voltar</Button>
									)
								}
							}
						)()
					}
					{
						(
							() => {
								if (dados.next) {
									return(
										<Button className="btn-avancar" color="info" onClick={() => setUrlFetch(dados.next)}>Avançar</Button>
									)
								}
							}
						)()
					}
				</div>
			</React.Fragment>
		)
	} else {
		return (
			<div>
				<header>
					<h2>Carregando dados</h2>
					<h3>Por favor, aguarde.</h3>
				</header>
			</div>
		);
	}
}

export default Article;