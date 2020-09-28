import React, {Component} from 'react';

class Footer extends Component {
	constructor(props){
		super(props)
	this.state = {pesanDariState:"Ini pesan state"}
}

//perintah untuk merubah value/data/isi yang berada didalam state
ubahDataState(e){
	e.preventDefault()
	this.setState({pesanDariState: "Data akan Berubah"})
}



	render(){
		return(
			<div>
			<p>{this.props.pesanDariProps}</p>
			<p>{this.state.pesanDariState}</p>

			<a href="/" onClick={(e)=>this.ubahDataState(e)}>Ubah Data</a>
			</div>
		)

	}
}

export default Footer;