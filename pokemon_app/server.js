require('dotenv').config()
// Import the express library here
const express = require('express')
const Pokemon = require('./models/pokemon.js')
const methodOverride = require('method-override')
// Instantiate the app here
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')


app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))


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

app.get('/', (req,res)=>{
    res.redirect('/pokemon')
})

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
})

app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon') // redirect back to pokemon index
    })
})

app.put('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/pokemon');
})
})

app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        if(!err){
            res.render(
              'Edit',
              {
                pokemon: foundPokemon   //pass in found pokemon
              }
            )
          } else {
            res.send({ msg: err.message })
          }
        })
      })


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// Invoke the app's `.listen()` method 
app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});
