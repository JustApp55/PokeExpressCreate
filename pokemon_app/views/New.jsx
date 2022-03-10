const React = require('react');

class New extends React.Component {
    render(){
        return (
        <html lang="en">
            <head>
             <meta charset="UTF-8" />
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Pokèmon</title>
            </head>
            <body style={{backgroundImage: 'url(https://wallpaperaccess.com/full/1360529.jpg'}}>
            <div>
            <h1 style={{color: '#ffd100'}}>Add New Pokemon</h1>
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image Link: <input type="text" name="img" /><br/>
              <input type="submit" name="" value="Create Pokemon"/>
            </form>
        </div>
        </body>
    </html>
        )}
}

module.exports = New;