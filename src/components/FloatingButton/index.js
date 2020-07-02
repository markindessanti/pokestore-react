import React from 'react';
import {
	Button
} from 'reactstrap';
import './floating.css';

const FloatingButton = (props) => {
	return (
		<Button>
			<a href='http://www.google.com.br' className="float">
				<i className="fa fa-shopping-cart fa-2x my-float"></i>
				<span className="tooltiptext">Seu carrinho</span>
			</a>
		</Button>
	);
};

export default FloatingButton;