import express from "express"
const router = express.Router()
import { create, getAnnonceUser, index, show, update } from "../Controllers/Annonce.js"
import {Auth} from "../Controllers/User.js"

router.get('/', Auth, index )
router.post('/' ,Auth ,create )
router.get('/:id',Auth,show )
router.put('/:id',Auth, update)
router.delete('/:id',Auth, update)
router.get('/getAnnonceUser',Auth, getAnnonceUser)


export default router ; 