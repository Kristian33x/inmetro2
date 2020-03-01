const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParadaSchema = new Schema({
    nombre: { type: String, required: true },
    rutasAsociadas: { type: [], require: true },
    tipoParada: { type: String, require: true },
    direccion: { type: String, require: true },
    latitud: { type: Number, require: true },
    longitud: { type: Number, require: true }

});


module.exports = mongoose.model('Paradas', ParadaSchema);