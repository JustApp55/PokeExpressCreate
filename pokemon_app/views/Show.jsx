const React = require('react');

class Show extends React.Component {
  render () {
      const pokemon = this.props.pokemon
      const style = {
          color: '#ffffff',
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
      <body style={{backgroundColor: '#eaf4f4'}}>
     
          <h1>Gotta Catch 'Em All!</h1>
          <div style={style}>
              <h2> {pokemon.name} </h2>
              <img src={pokemon.img + '.jpg'}></img>
              <br></br>
              <br></br>
              <a href='/pokemon'>Back To PokèDex</a>
          </div>
      
      </body>
    </html>
      )}
};

module.exports = Show;