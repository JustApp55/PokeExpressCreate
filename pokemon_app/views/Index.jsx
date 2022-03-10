const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const style = {
            color: '#023e8a',
            //backgroundColor: '#ccff33',
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
      <body style={{padding:'35px'}} style={{backgroundImage: 'url(https://wallpaper.dog/large/10988048.jpg)'}}>
          <div>
              <h1 style={{color: '#ffd100'}}>See All The Pokemon!</h1>
             
              <nav>
                    <a href="/pokemon/new" style={{color: 'white'}}>Create a new Pokemon!</a>
              </nav>
              <ul>
                    {this.props.pokemon.map((poke, i) => {
                        return (
                            <li key={li}>
                            <a href={`/pokemon/${poke.id}`} style={{color: 'white'}}>
                                {poke.name}
                            </a>
                            <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
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