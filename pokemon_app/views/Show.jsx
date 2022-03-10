const React = require('react');

class Show extends React.Component {
  render () {
      const pokemon = this.props.pokemon
      const style = {
          color: '#023e8a',
          padding: '25px',
          textTransform: 'capitalize'
      };
      return (
    <html lang="en">
      <head>
       <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Pokèmon</title>
      </head>
      <body style={{backgroundColor: '#fe5f55'}}>
     
          <h1 style={{color: '#ffd100'}}>Gotta Catch 'Em All!</h1>
          <br/>
          <h2 style={{color: "#0077b6"}} style={{color: 'white'}}> {pokemon.name} </h2>
          <div style={style}>
              <img src={pokemon.img + '.jpg'} ></img>
              <br></br>
              <a href='/pokemon' style={{color: 'white'}}>Back  To  PokèDex</a>
          </div>
      
      </body>
    </html>
      )}
};

module.exports = Show;