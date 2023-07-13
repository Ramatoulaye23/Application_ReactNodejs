import mongoose from "mongoose"


const annonceSchema = mongoose.Schema({
    nom : {type : String , required : true},
    prix : {type : Number , required : true},
    description : {type : String , required : true},
    photo : {type : String },
    qteDispo : {type : Number , default : 1},
    idClient : {type : mongoose.Schema.Types.ObjectId , ref : 'User' }, 
    createdAt : {type : Date , default: Date.now()},
    updatedAt : {type : Date , default: Date.now()}
})


export default mongoose.model('Annonce', annonceSchema)