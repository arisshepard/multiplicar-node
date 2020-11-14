const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
	case 'listar':
		listarTabla(argv.base, argv.limite)
			.then((datos) => {
				console.log('========================='.green);
				console.log(`tabla del ${argv.base}`.green);
				console.log('========================='.green);
				console.log(`${datos}`);
			})
			.catch((err) => console.log('Error al listar: ', err));
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then((archivo) => {
				console.log(`Archivo creado: ${colors.green(archivo)}`);
				// console.log(colors.green('Archivo creado: %s'), archivo);
			})
			.catch((err) => console.log('Error: ', err));

		break;
	default:
		console.log('comando no reconocido');
		break;
}

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('Yargs', argv.limite);
// console.log(argv2);
