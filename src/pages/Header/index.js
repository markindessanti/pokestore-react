import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Container
} from 'reactstrap';
import './header.css';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [usuario, setUsuario] = useState('');
	const toggle = () => setIsOpen(!isOpen);
	const {
		setTrocaDePagina,
		setUrlFetch
	} = props;

	async function handleForm() {
		const usuarioLower = usuario.toLowerCase();
		async function getDados() {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${usuarioLower}`);
				const json = await response.json();
				const offset = parseInt(json.id) - 1;
				const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=1`;
				setTrocaDePagina(true);
				setUrlFetch(url);
			} catch (error) {
				alert('Não encontramos nenhum pokémon com o nome digitado.\n\nPor favor, tente novamente');
			}
		}
		getDados();
	}

	return (
		<Container>
			<header>
				<Navbar color="warning" dark expand="md">
					<NavbarBrand className="div-brand" onClick={
						() => {
							setTrocaDePagina(true);
							setUrlFetch('https://pokeapi.co/api/v2/pokemon');
						}
					}>
						<img className="logo" src="../../favicon.ico" alt="logo" />
						<span className="logo-text">GAMA POKÉSTORE</span>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<button className="btn btn-outline-light my-2 my-sm-0" onClick={
								() => {
									setTrocaDePagina(true);
									setUrlFetch('https://pokeapi.co/api/v2/pokemon');
								}
							}>Home</button>
						</Nav>
						<div className="form-inline my-2 my-lg-0">
							<input id="inputPesquisar" className="form-control mr-sm-2" type="search" placeholder="Qual Pokémon você quer?" aria-label="Search" value={usuario} onChange={e => setUsuario(e.target.value)}></input>
							<button className="btn btn-outline-light my-2 my-sm-0" onClick={handleForm}>Pesquisar</button>
						</div>
					</Collapse>
				</Navbar>
			</header>
		</Container>
	);
}

export default Header;