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

const Article = React.memo((props) => {
	const [dados, setDados] = useState(null);
	const [listaInfo, setListaInfo] = useState(initListaInfo);
	const [dadosFinal, setDadosFinal] = useState(null);
	const listaEmptCards = [0, 1, 2, 3];
	const {
		trocaDePagina,
		setTrocaDePagina,
		urlFetch,
		setUrlFetch
	} = props;

	useEffect(() => {
		async function getDados() {
			const response = await fetch(urlFetch);
			const json = await response.json();
			setDados(json);
		}
		getDados();
		if (!trocaDePagina) {
			const carrinho = { status: false, mensagem: 'Você ainda não selecionou nenhum pokémon para compra', lista: [] };
			localStorage.setItem('carrinho', JSON.stringify(carrinho));
		}
	}, [urlFetch])

	useEffect(() => {
		let lista = [];
		if (dados) {
			let dadostemp = dados;
			async function fetchData(lista) {
				for (let index = 0; index < lista.results.length; index++) {
					const element = lista.results[index];
					const response = await fetch(element.url);
					const json = await response.json();
					const result = {
						id: json.id,
						nome: json.name[0].toUpperCase() + json.name.slice(1),
						altura: (parseInt(json.height) * 10).toString() + ' cm',
						peso: ((parseInt(json.weight) * 100) / 1000).toString().replace('.', ',') + ' kg',
						sprite: `https://pokeres.bastionbot.org/images/pokemon/${json.id}.png`,
						preco: (((parseInt(json.height) * 2) + (parseInt(json.weight) / 4)) * 2).toFixed(2).toString().replace('.', ','),
						previous: dadostemp.previous,
						next: dadostemp.next
					}
					dadostemp.results[index] = result;
				}
			}
			(async () => {
				await fetchData(dadostemp)
					.then(() => {
						lista = dadostemp.results;
						return lista;
					})
					.then((response) => {
						setListaInfo(response)
					})
			})()
		}
	}, [dados]);

	useEffect(() => {
		let lista = [];
		if (listaInfo.length) {
			let dadostemp = listaInfo;
			async function fetchData(lista) {
				for (let index = 0; index < lista.length; index++) {
					const element = lista[index];
					const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${element.id}/`);
					const json = await response.json();

					const encontrarDescricao = (object, language) => {
						let index = [];
						object.forEach((item) => {
							if (item.language.name === language) {
								index.push(item.flavor_text);
							}
						});
						return index[0];
					}
					let description = encontrarDescricao(json.flavor_text_entries, "es");

					if (!description) {
						description = encontrarDescricao(json.flavor_text_entries, "en");
					}

					const descricao = { descricao: description.replace(/\n/g, ' ').replace(/\f/g, ' ') };
					dadostemp[index] = Object.assign(element, descricao);
				}
			}
			(async () => {
				await fetchData(dadostemp)
					.then(() => {
						lista = dadostemp;
						return lista;
					})
					.then((response) => {
						setDadosFinal(response);
					})
			})()
		}
	}, [listaInfo]);

	if (dadosFinal) {
		let dadosFinalSize = 0;
		if (dadosFinal.length === 1) {
			dadosFinalSize = 1;
		} else {
			dadosFinalSize = dadosFinal.length
		}

		const listaFinal = dadosFinal
		return (
			<React.Fragment>
				<div className="container navigation-top">
					{
						(
							() => {
								if (dados.previous) {
									return (
										<Button className="btn-voltar" color="info" onClick={
											() => {
												setTrocaDePagina(true);
												setUrlFetch(dados.previous);
											}
										}>Voltar</Button>
									)
								} else {
									return (
										<Button className="btn-voltar-dumb" color="info">Voltar</Button>
									)
								}
							}
						)()
					}
					{
						(
							() => {
								if (dados.next) {
									return (
										<Button className="btn-avancar" color="info" onClick={
											() => {
												setTrocaDePagina(true);
												setUrlFetch(dados.next);
											}
										}>Avançar</Button>
									)
								} else {
									return (
										<Button className="btn-avancar-dumb" color="info">Voltar</Button>
									)
								}
							}
						)()
					}
				</div>
				{
					(
						() => {
							if (dadosFinalSize > 1) {
								return (
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
											(
												() => {
													if (dadosFinalSize > 1) {
														listaEmptCards.map((item) => {
															return (
																<Cartao classe='card-hidden' key={item} imagem="" nome="" altura="" peso="" descricao="" preco="" />
															)
														})
													}
												}
											)()
										}
									</main>
								)
							} else {
								return (
									<main className="main-card-unico">
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
											(
												() => {
													if (dadosFinalSize > 1) {
														listaEmptCards.map((item) => {
															return (
																<Cartao classe='card-hidden' key={item} imagem="" nome="" altura="" peso="" descricao="" preco="" />
															)
														})
													}
												}
											)()
										}
									</main>
								)
							}
						}
					)()
				}
				<div className="container navigation-bottom">
					{
						(
							() => {
								if (dados.previous) {
									return (
										<Button className="btn-voltar" color="info" onClick={
											() => {
												setTrocaDePagina(true);
												setUrlFetch(dados.previous);
											}
										}>Voltar</Button>
									)
								} else {
									return (
										<Button className="btn-voltar-dumb" color="info">Voltar</Button>
									)
								}
							}
						)()
					}
					{
						(
							() => {
								if (dados.next) {
									return (
										<Button className="btn-avancar" color="info" onClick={
											() => {
												setTrocaDePagina(true);
												setUrlFetch(dados.next);
											}
										}>Avançar</Button>
									)
								} else {
									return (
										<Button className="btn-avancar-dumb" color="info">Voltar</Button>
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
})

export default Article;