const {Router} = require('express');
const {getUsers,creatUser,getUserById} = require('../controllers/controller')

const router = Router();

router.get('/personagens',getUsers ) //lista todos
router.get('/personagens/:codigo',getUserById) //pega por id(codigo no caso)
router.post('/personagens/add',creatUser) //cria um novo 

module.exports = router
