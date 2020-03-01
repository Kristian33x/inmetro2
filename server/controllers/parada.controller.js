const Parada = require('../models/parada');
const paradaCtrl = {};


paradaCtrl.getParadas = async(req, res) => {
    const paradas = await Parada.find();
    res.json(paradas);
};


paradaCtrl.getParada = async(req, res) => {
    const parada = await Parada.findById(req.params.id);
    res.json(parada);
};



paradaCtrl.createParada = async(req, res) => {
    const parada = new Parada({
        nombre: req.body.nombre,
        rutasAsociadas: req.body.rutasAsociadas,
        tipoParada: req.body.tipoParada,
        direccion: req.body.direccion,
        latitud: req.body.latitud,
        longitud: req.body.longitud
    });
    await parada.save();
    res.json({
        "estatus": "Parada Guardada"
    });
};

paradaCtrl.editParada = async(req, res) => {
    const { id } = req.params;
    const parada = {
        nombre: req.body.nombre,
        rutasAsociadas: req.body.rutasAsociadas,
        tipoParada: req.body.tipoParada,
        direccion: req.body.direccion,
        latitud: req.body.latitud,
        longitud: req.body.longitud
    }
    await Parada.findByIdAndUpdate(id, { $set: parada }, { new: true });

    res.json({
        "estatus": "Parada Actualizada"
    });
};

paradaCtrl.deleteParada = async(req, res) => {
    const { id } = req.params;
    await Parada.findByIdAndRemove(id);
    res.json({
        "estatus": "Parada Eliminada"
    });
}

module.exports = paradaCtrl;