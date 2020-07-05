import React from 'react';
import { Table } from 'reactstrap';

function ListaCarrinho({ totalizar }) {
	const carrinho = JSON.parse(localStorage.getItem('carrinho'));
	let key = 0;
	let total = 0;
	carrinho.lista.map((item) => {
		total += parseFloat(item.preco.replace(',', '.'));
		return true;
	})

	totalizar(total);

	if (carrinho.status) {
		return (
			<div>
				<Table className="table table-bordered striped">
					<tbody>
						{
							carrinho.lista.map((item) => {
								key++;
								return (
									<tr className="data-field" key={key}>
										<td><img className="img-chart" src={item.imagem} alt={item.nome} /><br />{item.nome}</td>
										<td>{item.preco}</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
			</div>
		);
	} else {
		return (
			<div>
				<Table className="table table-bordered striped">
					<tbody>
						<tr className="data-field">
							<td>{carrinho.mensagem}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}

}

export default ListaCarrinho;