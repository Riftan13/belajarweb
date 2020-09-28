import React from 'react';
//import React, {Component} from 'react';
class Footer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			namaBuku: 'Geografi',
			alamat: 'Karawang',
			nomorTelp: 14040,
			contohProps: props.ket
		}
	}

	render(){
		return(
			<div>
			<h3>{this.props.judul}</h3>
			<p>{this.props.ket}</p>
			<h5>{this.state.namaBuku}</h5>
			<h5>{this.state.alamat}</h5>
			<h5>{this.state.nomorTelp}</h5>
			<h5>{this.state.contohProps}</h5>
			</div>
			)
	}
}

//
// class Footer extends Component{
// 	render(){
// 		return(
// 		<h2>Membuat class dengan React.Component</h2>
// 		)
// 	}
// }

export default Footer;