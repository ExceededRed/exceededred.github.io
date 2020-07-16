/*const miTitutlo = document.querySelector('h1');
miTitutlo.textContent = '¡Hola mundo!';
*/

let miImage = document.querySelector('img');
miImage.onclick = function() {
	let miSrc = miImage.getAttribute('src');
	if(miSrc === 'images/donkey_kong_arcade.jpg'){
		miImage.setAttribute('src','images/pac-man.jpg');
	} else {
		miImage.setAttribute('src','images/donkey_kong_arcade.jpg');
	}
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
	let miNombre = prompt('Por favor, ingresa tu nombre.');
	if(!miNombre) {
		estableceNombreUsuario();
	} else {
		localStorage.setItem('nombre', miNombre);
		miTitulo.textContent = 'Los videojuegos son geniales, '+miNombre;
	}	
}

if(!localStorage.getItem('nombre')) {
	estableceNombreUsuario();
}
else {
	let nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'Los videojuegos son geniales, '+nombreAlmacenado;
}

miBoton.onclick = function() {
	estableceNombreUsuario();
}