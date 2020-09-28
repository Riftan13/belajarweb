import React from 'react';

// const Header = () =>{
// 	return(
// 		<h2>Membuat Function</h2>
// 		)
// }

function Header(props){
	return(
		<div>
		<h2>{props.judul}</h2>
		<p>{props.ket}</p>
		</div>
		)
}
export default Header;