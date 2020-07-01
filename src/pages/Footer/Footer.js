import React from 'react';
import {
	Container,
	Jumbotron
} from 'reactstrap';
import "./footer.css";

import whatsappIcon from '../../assets/img/whatsappIcon.png';
import facebookIcon from '../../assets/img/facebookIcon.png';
import instagramIcon from '../../assets/img/instagramIcon.png';
import twitterIcon from '../../assets/img/twitterIcon.png';

class Footer extends React.Component {
	render() {
		return (
			<Jumbotron className='jumbo-footer'>
				<Container>
					<footer className="div-footer">
						<div className='info'>
							<p id="label-endereco">Endereço:</p>
							<p>Rua Bonifácio Asturo, 54</p>
							<p>Bairro Santa Cecília</p>
							<p>Engenho Grande/MS</p>
							<p>CEP 53678-060</p>
						</div>
						<div className='redes-sociais'>
							<p><img src={whatsappIcon} alt="WhatsApp" />(31) 99555-4356</p>
							<p><a href="htttps://www.facebook.com/gamapokestore">
								<img src={facebookIcon} alt="Facebook" />Gama Pokestore</a></p>
							<p><a href="https://twitter.com/gamapokestore">
								<img src={twitterIcon} alt="Twitter" />gamapokestore</a></p>
							<p><a href="https://instagram.com/gamapokestore">
								<img src={instagramIcon} alt="Instagram" />@gamapokestore</a></p>
						</div>
					</footer>
					<div>
						<div id="creditos">
							<p>Desenvolvido por &copy;Markin Dessanti</p>
						</div>
					</div>
				</Container>
			</Jumbotron>
		);
	}
}

export default Footer;