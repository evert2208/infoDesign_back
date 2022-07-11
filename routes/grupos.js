/* 
'/api/grupos'
*/

var { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getGrupos, borrarGrupo, actualizarGrupo, crearGrupos } = require('../controllers/grupos');
var router = Router();

router.get('/', getGrupos);
router.post('/', [
        check('nombre', 'El nombre del grupo es obligatorio').not().isEmpty(),
        check('valorMax', 'El valor maximo del grupo es obligatorio').not().isEmpty(),
        check('fecha', 'La fecha del grupo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearGrupos
);

router.put('/:id', [

        check('nombre', 'El nombre del grupo es obligatorio').not().isEmpty(),

    ],
    actualizarGrupo
);

router.delete('/:id', borrarGrupo);

module.exports = router;