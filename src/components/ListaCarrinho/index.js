import React from 'react';
import { Table } from 'reactstrap';

function ListaCarrinho() {
	const carrinho = JSON.parse(localStorage.getItem('carrinho'));
	let key = 0;

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