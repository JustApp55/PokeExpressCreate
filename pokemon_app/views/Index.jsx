const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const style = {
            color: '#023e8a',
            backgroundColor: '#eaf4f4',
            textTransform: 'capitalize'
        };     
        return (
          <div style={style}>
              <h1>See All The Pokemon!</h1>
              <nav>
                    <a href="/pokemon/new">Create a new Pokemon!</a>
              </nav>
              <ul>
                    {pokemon.map((poke, i) => {
                        return (
                            <li>
                            <a href={`/pokemon/${poke.id}`}>
                                {poke.name}
                            </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
          )  
     }
}

module.exports = Index