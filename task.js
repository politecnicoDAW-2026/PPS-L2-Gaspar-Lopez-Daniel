function validarTiempo(tiempo) { 
	if (tiempo < 0) 
		throw new Error('El tiempo no puede ser negativo'); 
		return tiempo; 
	}
