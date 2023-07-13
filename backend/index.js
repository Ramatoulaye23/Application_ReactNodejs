import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import UserRoutes from './Routes/User.js'
import AnnonceRoutes from './Routes/Annonce.js'
import cors from "cors"


let app = express()
mongoose.connect(
    process.env.MongoDB_URI,
    {useNewUrlParser : true, useUnifiedTopology : true, dbName : 'Projet_MERN_full_stack'}
)
.then(()=>console.log('Connexion a la base de donnée établie'))
.catch(()=>console.log('Connexion a la base de donnée échouée'))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true})); 

app.use('/user', UserRoutes)
app.use('/annonce', AnnonceRoutes)

let port = process.env.port
app.listen( port ,()=>console.log(`Le serveur tourne bien sur le port ${port}`))