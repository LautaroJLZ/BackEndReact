import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getTasks, obtenerTask, crearTask, actulizarTask, eliminarTask } from '../controller/tasks.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {createTaskSchema} from '../schemas/task.schema.js'


const router = Router()

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, obtenerTask);
router.post('/tasks', authRequired, validateSchema(createTaskSchema), crearTask);
router.delete('/tasks/:id', authRequired, eliminarTask); 
router.put('/tasks/:id', authRequired, actulizarTask);


export default router