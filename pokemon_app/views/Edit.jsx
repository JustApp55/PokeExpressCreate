const React = require('react')
//using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (

      <html lang="en">
      <head>
       <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Pokèmon</title>
      </head>
      <body  style={{backgroundImage: 'url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700946456.jpg)'}} >
        <div style={{color: 'white'}}>
        <nav  style={{padding: '25px 100px 0'}}>
      <DefaultLayout title="Edit Page">     
      <link rel="stylesheet" href="/css/app.css"/> 
      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
          <form action={`/pokemon/${this.props.pokemon_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} /><br/>
          Image URL: <input type="text" name="img" defaultValue={this.props.pokemon.img} /><br/>
         
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    
      </DefaultLayout>
      </nav>
      </div>
      </body>
    </html>
    )
    
  }
}


module.exports= Edit;