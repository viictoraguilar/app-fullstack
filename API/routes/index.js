const express = require('express')
const router = express.Router()
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function() {

  //Agrega nuevos pacientes via POST
  router.post('/pacientes',
    pacienteController.nuevoCliente
  )

  //Obtiene todos los registros de pacientes en la bd
  router.get('/pacientes', 
    pacienteController.obtenerPacientes
  )

  //Obtiene un paciente en especifico
  router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
  )

  //Actualizar un registro con ID especifico
  router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
  )

  //ELimina un paciente por su ID
  router.delete('/pacientes/:id', 
    pacienteController.eliminarPaciente
  )

  return router
}