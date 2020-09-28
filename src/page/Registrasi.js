import React, {Component} from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state = {
			judul: 'Contoh Judul',
			contohPerubahan: 'Judul yang akan di ubah',
			valueInput: '',
			valueInput2: '',
			valueInput3: '',
			valueInput4: '',
			
		}
		this.ubahState = this.ubahState.bind(this)
	}


	ubahState(namaValue,e){
	e.preventDefault()

	// perubahan state secara reguler
	//this.setState({[namaValue]: e.target.value})

	//perubahan state secara Asynchronous
	var tampungData = e.target.value
	this.setState(function(state, props){
		return{
			[namaValue]: tampungData
		}
	});
	}

	
	


	// ubahState(e){
	// 	e.preventDefault()
	// 	console.log(e.target.value)

	// 	this.setState((state, props)=>({
	// 		judul: 'Ubah Melalui input'
	// 	}))

		//-----perubahan state secara reguler tidak bisa melibatkan state/props-------
		// this.setState({judul: 'Merubah Judul'})


//----perubahan state secara Asynchronous di tulis dengan cara arrow function
		// this.setState((state, props) =>({
		// 	judul: 'merubah ke 2'
		// }))


//----perubahan state secara Asynchronous di tulis dengan function reguler
		// this.setState(function(state, props){
		// 	return {
		// 		judul: 'Merubah judul Asynchronous secara reguler function'
		// 	}
		// });
	

	render(){
	return(

	<div>
	<h2>Contoh 1</h2>
	<p>{this.state.valueInput}</p>
		<input value={this.state.valueInput} onChange={(e)=>this.ubahState("valueInput",e)}/>
	<h5>==============================</h5>


	<h2>Contoh 2</h2>
	<p>{this.state.valueInput2}</p>
		<input value={this.state.valueInput2} onChange={(e)=>this.ubahState("valueInput2",e)}/>
	<h5>==============================</h5>

	<h2>Contoh 3</h2>
	<p>{this.state.valueInput3}</p>
		<input value={this.state.valueInput3} onChange={(e)=>this.ubahState("valueInput3",e)}/>
	<h5>==============================</h5>

	<h2>Contoh 4</h2>
	<p>{this.state.valueInput4}</p>
		<input value={this.state.valueInput4} onChange={(e)=>this.ubahState("valueInput4",e)}/>
	<h5>==============================</h5>


	
	</div>
	)
	}
}

export default Registrasi;