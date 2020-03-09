const Bus = require('../models/bus');
const busCtrl = {};


busCtrl.getBuses = async(req, res) => {
    const buses = await Bus.find();
    res.json(buses);
};


busCtrl.getBus = async(req, res) => {
    const bus = await Bus.findById(req.params.id);
    res.json(bus);
};



busCtrl.createBus = async(req, res) => {
    const bus = new Bus({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagenBus: req.body.imagenBus,
        Fecha: req.body.Fecha,
        imagenTipoBus: req.body.imagenTipoBus,
        NumBusesAsociados: req.body.NumBusesAsociados,
        origen: req.body.origen,
        destino: req.body.destino
    });
    await bus.save();
    //console.log(bus);
    // console.log(req.body);
    res.json({
        "estatus": "Ruta Guardada"
    });
};

busCtrl.editBus = async(req, res) => {
    const { id } = req.params;
    const bus = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagenBus: req.body.imagenBus,
        Fecha: req.body.Fecha,
        imagenTipoBus: req.body.imagenTipoBus,
        NumBusesAsociados: req.body.NumBusesAsociados,
        origen: req.body.origen,
        destino: req.body.destino
    }
    await Bus.findByIdAndUpdate(id, { $set: bus }, { new: true });

    res.json({
        "estatus": "Ruta Actualizada"
    });
};

busCtrl.deleteBus = async(req, res) => {
    const { id } = req.params;
    await Bus.findByIdAndRemove(id);
    res.json({
        "estatus": "Ruta Eliminada"
    });
}

module.exports = busCtrl;