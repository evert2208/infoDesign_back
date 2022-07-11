var { Schema, model } = require('mongoose');

var GrupoSchema = Schema({
    nombre: {
        type: String,
        require: true
    },

    valorMax: {
        type: Number,
        require: true

    },
    valorAct: {
        type: Number
    },
    fecha: {
        type: String
    },
    alertas: {
        type: Number
    }

}, { collection: 'grupos' });

GrupoSchema.method('toJSON', function() {
    var { __v, ...object } = this.toObject();

    return object;
});

module.exports = model('Grupo', GrupoSchema);