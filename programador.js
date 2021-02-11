// Importar modulo Events.js
const EventEmitter = require('events');

// Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();




/* 
Clase programador.
 un programador que permita configurar la temperatura que se desea tener en la habitación en todo momento.
*/

class Programador extends EventEmitter {
	constructor(){
		super();

		const arrProgramacion = [
			{ hora: "07:00",
				temperatura: 22
			},
			{ hora: "08:30",
				temperatura: 18
			},
			{ hora: "12:25",
				temperatura: 15
			},
			{ hora: "18:00",
				temperatura: 22
			},
			{ hora: "23:00",
				temperatura: 20
			}
		];		
		this.programacion = arrProgramacion;

		this.programacion.forEach( (horaTemp) => {
			const sch = later.parse.text(`at ${horaTemp.hora}`)
			
			later.setInterval( () => {
				console.log(`${horaTemp.hora} - cambio temperatura ideal a: ${horaTemp.temperatura}ºC`)
				// console.log(horaTemp.hora + " - cambio temperatura ideal a : " + horaTemp.temperatura)
				this.emit('ideal', horaTemp.temperatura);
			}, sch)
		})

	};

};



exports = module.exports = Programador;