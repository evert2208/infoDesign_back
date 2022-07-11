const { response } = require("express");
const Grupo = require('../models/grupo');

const getGrupos = async(req, res = response) => {

    const grupos = await Grupo.find().populate('nombre valorMax valorAct fecha alertas');



    res.json({
        ok: true,
        grupos
    });
};

const crearGrupos = async(req, res = response) => {


    var grupo = new Grupo(req.body);


    try {

        const grupoDB = await grupo.save();

        res.json({
            ok: true,
            grupo: grupoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin'
        });
    }


};

const actualizarGrupo = async(req, res = response) => {

    const id = req.params.id;


    try {

        const grupo = await Grupo.findById(id);

        if (!grupo) {
            return res.status(404).json({
                ok: true,
                msg: 'grupo no encontrado'

            });
        }

        const cambiosGrupo = {
            ...req.body

        };
        const grupoAct = await Grupo.findByIdAndUpdate(id, cambiosGrupo, { new: true });

        res.json({
            ok: true,
            grupo: grupoAct
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin'
        });
    }

};

const borrarGrupo = async(req, res = response) => {

    const id = req.params.id;


    try {

        const grupo = await Grupo.findById(id);

        if (!grupo) {
            return res.status(404).json({
                ok: true,
                msg: 'hospital no encontrado'

            });
        }

        await Grupo.findByIdAndDelete(id);


        res.json({
            ok: true,
            msg: 'grupo borrado'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin'
        });
    }
    res.json({
        ok: true,
        msg: 'borrargrupo'
    });
};

module.exports = {
    getGrupos,
    crearGrupos,
    actualizarGrupo,
    borrarGrupo
}