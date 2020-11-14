const fs = require('fs');
const colors = require('colors');

crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			return reject(`${base} no es un número`);
		}

		if (!Number(limite)) {
			return reject(`Limite ${limite} no es un número`);
		}

		if (limite <= 0) {
			return reject(`El límite ${limite} tiene que ser mayor o igual a 1`);
		}

		let data = '';

		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		// const data = new Uint8Array(Buffer.from('Hello Node.js'));
		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
			if (err) return reject(err);
			else resolve(`tabla-${base}-al-${limite}.txt`);
		});
	});
};

listarTabla = (base, limite) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			return reject(`Base ${base} no es un número`);
		}

		if (!Number(limite)) {
			return reject(`Limite ${limite} no es un número`);
		}

		if (limite <= 0) {
			return reject(`El límite ${limite} tiene que ser mayor o igual a 1`);
		}

		let data = '';

		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		return resolve(data);
	});
};

module.exports = {
	crearArchivo,
	listarTabla,
};
