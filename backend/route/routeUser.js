let express =require("express");
const router = express.Router(); 
let ControleurUser =require("../controller/ControleurUser.js") 

router.post("/signup", ControleurUser.signup);
router.post("/login", ControleurUser.login);
router.post("/annonce", ControleurUser.annonce);
//router.get("/annonce", ControleurUser.annonce);
module.exports = router
