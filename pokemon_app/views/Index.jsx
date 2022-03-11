const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon }  = this.props;
        //const poke = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
            //color: '#023e8a',
            //backgroundColor: '#ccff33',
            //textTransform: 'capitalize'
        
        return (
            
    <html lang="en">
      <head>
       <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Pokèmon</title>
      </head>
      <body  style={{backgroundImage: 'url(https://wallpaper.dog/large/10988048.jpg)'}}>
          
          <div>
          <link rel="stylesheet" href="/css/app.css"/> 
              <h1 style={{color: '#ffd100'}}>See All The Pokemon!</h1>
             
              <nav>
                    <a href="/pokemon/new" style={{color: 'white'}}>Create a new Pokemon!</a>
              </nav>
              <ul>
                    {pokemon.map((poke, i) => {
                        return (
                            <li key={poke._id} style={{color: '#cfbaf0'}}>
                                <a href={`/pokemon/${poke.id}`}>
                                <h2 style={{color: '#cfbaf0'}}>{poke.name} </h2>
                                </a>
                            <a href={`/pokemon/${poke.id}/edit`} style={{color: 'white'}}>
                                
                                Edit This Pokemon
                            </a> 
                            
                            <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                                <br/>
                             <input type="submit" value="DELETE"/>
                            </form>
                            <br/>
                            
                            </li>
                        );
                    })}
                </ul>

            </div>
            </body>
    </html>
          )  
     }
}

module.exports = Index