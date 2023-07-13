let mongoose =require ("mongoose");
let bcrypt = require ("bcrypt");

 //creation schema user
const userSchema = new mongoose.Schema({
    fullname:String,
    email:{type :String, unique : true , required : true}, 
    password: String,
    createAt:{
        type:Date,
        default:Date.now()
    }
    ,
    updateAt: {
        type:Date,
    default:Date.now()
}
   
});//creation mot de passe haché
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

//declaration user
const User = mongoose.model("User", userSchema);
 module.exports =User;