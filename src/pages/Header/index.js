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

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container>
			<header>
				<Navbar color="warning" dark expand="md">
					<NavbarBrand className="div-brand" href="/">
						<img className="logo" src="../../favicon.ico" alt="logo" />
						<span className="logo-text">GAMA POKÉSTORE</span>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
						</Nav>
						<form className="form-inline my-2 my-lg-0">
							<input id="inputPesquisar" className="form-control mr-sm-2" type="search" placeholder="Qual Pokémon você quer?" aria-label="Search"></input>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit">Pesquisar</button>
						</form>
					</Collapse>
				</Navbar>
			</header>
		</Container>
	);
}

export default Header;