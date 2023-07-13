
let User = require("../model/ModelAnnonce.js")
let bcrypt = require("bcrypt");// pareil que Import bcrypt from "bcrypt"
let jwt = require("jsonwebtoken");//pareil que Import jwt from 
let Annonce = require('../model/ModelAnnonce.js')

// exports.signup = async (req, res) => {
//     try {
//         let u = await User.create(req.body);
//         res.status(200).json({message: "User créé"});
//     } catch (err) {
//         res.status(400).json({ message: "Erreur pendant inscription" });
//     }
// }
  
// exports.login = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email }); 
//         console.log(user)
//         console.log(req.body.password)
//         console.log(user.password)
//         let isMatch = await bcrypt.compare(req.body.password, user.password);
        
//         if (user) {
//             if (isMatch) {
//                 res.status(200).json({
//                     email : user.email, 
//                     token: jwt.sign({email : user.email},'RANDOM_TOKEN_SECRET', {expiresIn: '1h'} )
//                 });
//             } else {
//                 res.status(400).json({ message: "Invalid mot de pass" });
//             }
//         } else res.status(400).json({ message: "Invalid email" });
//     } catch (err) {
//         res.status(400).json({ message: err });
//     }
// }

// exports.isLoggedIn = (req, res, next) => {
//     console.log(req.headers.authorization)
//     let token = req.headers.authorization.replace("bearer ", "");
//     jwt.verify(token, 'RANDOM_TOKEN_SECRET', function (err, payload) {// la methode verify permet de decoder le token
//         if (err) {
//             res.status(401).json({ message: "Unauthorized" });
//         } else 
//         req.payload = payload// payload permet de recupere le token
//         next();
//     });
// };

exports.annonce = async (req, res) => {
    try {
        let u = await Annonce.create(req.body);
        res.status(200).json({message: "annonce créé"});
    } catch (err) {
        res.status(400).json({ message: "Erreur pendant publication annonce" });
    }
}