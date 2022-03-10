require('dotenv').config()
// Import the express library here
const express = require('express')
const Pokemon = require('./models/pokemon.js')
// Instantiate the app here
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')


app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:true}));


app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());


  app.get('/pokemon/seed', (req, res)=>{
    Pokemon.create([
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
     ], (err, data)=>{
        res.redirect('/pokemon');
    })
});

// app.get('/', (req,res)=>{
//     res.render('Welcome to Pokemon App')
// })

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (err, allPokemon)=> {
    res.render('Index', {pokemon: allPokemon})})
    
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
    Pokemon.create(req.body, (err, createdPokemon)=>{
       res.redirect('/pokemon')//send user back to index page
       
})
// console.log(Pokemon)
// console.log(req.body)
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// Invoke the app's `.listen()` method 
app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});
