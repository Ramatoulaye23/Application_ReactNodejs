import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../Modeles/User.js"
//import 'dotenv/config'


export const signup = async (req, res) => {
    try {
        let user = await User.create(req.body);
        res.status(200).json({message: "User créé"});
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err});
    }
}



export const login = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username }); 
        let isMatch = await bcrypt.compare(req.body.password, user.password);
        
        if (user) {
            if (isMatch) {
                res.status(200).json({
                    id_utilisateur : user._id, 
                    token: jwt.sign({id_utilisateur : user._id},'RANDOM_TOKEN_SECRET', {expiresIn: '48h'} )
                });
            } else {
                res.status(400).json({ message: "Invalid mot de pass" });
            }
        } else res.status(400).json({ message: "Invalid email" });
    } catch (err) {
        res.status(400).json({ message: err });
    }
}


export const Auth = (req, res, next) => {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', function (err, payload) {
        if (err) {
            res.status(401).json({ message: "Unauthorized" });
        } else 
        req.payload = payload
        next();
    });
};

export const Auth2 = async (req, res, next) => {
    let u = await User.findById(req.payload.id_utilisateur)    
    if (u.role !== 'A') {
            res.status(401).json({ message: "Vous n'avez pas la permission" });
        } else 
        next();
};