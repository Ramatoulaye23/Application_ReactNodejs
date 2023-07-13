let mongoose =require ("mongoose");
let bcrypt = require ("bcrypt");

 //creation schema user
const annonceSchema = new mongoose.Schema({
    nom:String,
   prix:Number,
   description:String,
   photo: String,
    qteDispo:{
        type:Number,
        default:1
    }
    ,
    idClient:{
        type:Number,
    },
    createAt: {
        type:Date,
    default:Date.now()
},
    updateAt: {
        type:Date,
    default:Date.now()
}
   
});//creation mot de passe haché
annonceSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});
//declaration user
const Annonce = mongoose.model("Annonce", annonceSchema);
 module.exports =Annonce;