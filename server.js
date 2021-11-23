
const express = require('express')
const app = express()
const path = require('path')
var urllib = require('urllib')


app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/sanity', function (request, response) {
    response.send("ok")
})

const port = 8080
app.listen(port,function(){
    console.log("Running on port "+port)
})

// app.get('/recipes/:ingredient', function(request, response){
//     let ingredient  = request.params.ingredient 
//     response.send(data[ingredient ])
// })
const ourData={results: [] }


urllib.request('https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT.json', function (err, data, res) {
    ourData.results = JSON.parse(data).results.RECIPES
    if (err) {
        throw err; 
      }
      //console.log(res.statusCode);
      //console.log(res.headers);
      // data is Buffer instance
      console.log(data.toString());
});


app.get('/recipes/:ingredient',function(request,response){
    let ingredientId = ingredients[request.params.ingredient]
   
    let recipeIngredients = ourData.results.filter(r => r.ingredientId===ingredientId)
    .map(p =>  {return{"Recipe" : r.recipe,
        "lastName" : p.lastName,
        "pos":r.pos,
        "Ingredients":r.array.forEach(i => {i})
        }});
   
        response.send(data[recipeIngredients ])
})



//https://api-nba-v1.p.rapidapi.com/teams/shortName/%7Bshortname%7D

// const data = {
//     8112: {
//         title: "Name of the Wind",
//         author: "Patrick Rothfuss"
//     },
//     9121: {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger"
//     },
//     1081: {
//         title: "The Giver",
//         author: "Lois Lowry"
//     }
// }

