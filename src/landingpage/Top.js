import React from 'react';

const Top = () => {

	const handlePesan = () =>{
		alert('Pesan dari TOP')
	}

	const Nama = () => {
		alert('Riftan Riksana P')
	}

	const Parameter = (nama,pesan) =>{
		alert(nama)
		alert(pesan)
	}

	return(
		<div>
		<a href="/" onClick={handlePesan}>Halaman Top</a><br/>
		<a href="/" onClick={Nama}>Nama</a><br/>
		<a href="/"onClick={()=>Parameter("Dari Render Kelas", "Pesan 2")}>Parameter</a><br/>
		</div>
		)
}

export default Top;