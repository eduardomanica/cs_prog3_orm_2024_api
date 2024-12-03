import { Router } from 'express';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
//import PatenteController from './app/controllers/PatenteController';
const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store)
router.delete('/endereco/delete', EnderecoController.delete)


router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/loginjogador', JogadorController.login);
router.post('/insertjogador', JogadorController.store);
router.post('/updatejogador', JogadorController.update);
router.post('/deletejogador', JogadorController.delete);


router.get('/listpatente', PatenteController.list);
router.get('/patente/:id', PatenteController.find);
router.get('/deletepatente/:id', PatenteController.delete);
router.post('/updatepatente/', PatenteController.update);
router.post('/insertpatente/', PatenteController.store);


router.get('/listlocal', LocalController.list);
router.get('/local/:id', LocalController.find);
router.get('/deletelocal/:id', LocalController.delete);
router.post('/updatelocal/', LocalController.update);
router.post('/insertlocal/', LocalController.store);

//router.post('/Patente', PatenteController.store);
export default router;
