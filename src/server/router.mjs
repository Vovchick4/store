import Router from "express";  //створимо файл для маршрутів
import cors from 'cors'
import ItemController from "./ItemController.mjs";

const router = new Router();   //створюємо екзкмпляр

router.use(cors({ origin: '*' })) // Additional Options (CORS)

router.post('/items', ItemController.create);
router.get('/items', ItemController.getAll);
router.get('/items/:id', ItemController.getOne);
router.put('/items', ItemController.update);
router.delete('/items/:id', ItemController.delete);

router.get('/', (request, response) => {
    response.status(200).json('Server is working on get');
});
//створили роутери де вказали маршрути для постів
export default router;