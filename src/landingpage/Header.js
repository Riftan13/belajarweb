import React, {Component} from 'react';

class Header extends Component {
	constructor(props){
		super(props)
	this.state = {PesanKhusus:"Ini pesan khusus"}

	 this.handlePesanHeader = this.handlePesanHeader.bind(this);
	this.handlePesanKhusus = this.handlePesanKhusus.bind(this);

}

	handlePesanHeader(){
		alert('Pesan Dari Header')
	}

	handlePesanKhusus(){
		alert(this.state.PesanKhusus)
	}

	handlePesanHeader2(nilai1, nilai2, e){
		e.preventDefault()
		alert(nilai1)
		alert(nilai2)
	}


	render(){
		return(
			<div>
			<p>{this.state.ambilData}</p>
			<a href="/"onClick={(e)=>this.handlePesanHeader2("Dari Render Kelas", "Pesan 2", e)}>Klik Header 2</a><br/>
			<a href="/"onClick={this.handlePesanHeader}>Klik Header</a><br/>
			<a href="/"onClick={this.handlePesanKhusus}>Pesan Khusus</a>

			</div>
			)
	}
}

export default Header;