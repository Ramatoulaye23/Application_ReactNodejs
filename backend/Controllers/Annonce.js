import Annonce from "../Modeles/Annonce.js"
import User from "../Modeles/User.js"


export const index = async (req,res)=>{
    try {
        let annonce = await Annonce.find();
        res.status(200).json(annonce);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err});
    }
} 


export const create = async (req,res)=>{
    try {
        let annonce = await Annonce.create(req.body);
        annonce.idClient = req.payload.id_utilisateur
        res.status(200).json({message: "Annonce créer" , annonce });
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err});
    }
} 

export const show = async (req,res)=>{
    try {
        let annonce = await Annonce.findById(req.params.id);
        res.status(200).json(annonce);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err});
    }
} 

export const update = async (req,res)=>{
    
        try {
            let { id } = req.params;
           // let { stade, jour_publication } = req.body;
            let annonce = await Annonce.findById(id);
            annonce.nom = req.body.nom;
            annonce.prix = req.body.prix;
            annonce.description = req.body.description;
            annonce.qteDispo = req.body.qteDispo;
            await annonce.save();
            res.status(200).json(annonce);
        } catch (err) {
            res.status(400).json(err);
        }
    
} 

export const destroy = async (req,res)=>{
    
    try {
        let { id } = req.params;
       // let { stade, jour_publication } = req.body;
        let annonce = await Annonce.findById(id);
        await annonce.deleteOne();
        res.status(200).json(annonce);
    } catch (err) {
        res.status(400).json(err);
    }

} 

export const getAnnonceUser = async (req,res)=>{
    
    try {
        let user = await User.findById(req.payload.id_utilisateur)
        let annonce = await Annonce.findone({idClient : user._id});
        res.status(200).json(annonce);
    } catch (err) {
        res.status(400).json(err);
    }
} 