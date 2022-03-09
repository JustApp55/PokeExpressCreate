// Import the express library here
const express = require('express')
const pokemon = require('./models/pokemon.js')
// Instantiate the app here
const app = express()
const port=3000
const mongoose = require('mongoose')


app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:true}));


app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

app.get('/Index', (req, res)=>{
    pokemon.find({}, (error, allPokemon)=>
    res.render('Index', {pokemon: allPokemon}))
})

app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})

app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon:foundPokemon})
    })
})

app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body, (error, createPokemon)=>{
       res.redirect('/pokemon')//send user back to index page
})
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// Invoke the app's `.listen()` method 
app.listen(port,() => {
    console.log('listening on port' , port);
});
