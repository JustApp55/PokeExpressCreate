const React = require('react')
//using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
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
    )
  }
}


module.exports= Edit;