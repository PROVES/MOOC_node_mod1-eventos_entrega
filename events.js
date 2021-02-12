

class EventEmitter {
	escuchadores = [];

	on ( evento, funcion ) {
		this.escuchadores.push([evento, funcion])
	}

	emit ( evento ) {
		return this.escuchadores.find( (elem) => {
			return elem[0] === evento
		})[1]()
	}
}

exprts = module.exports = EventEmitter;