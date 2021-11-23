
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


urllib.request('https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT', function (err, data, res) {
    ourData.results = JSON.parse(data).results.YOUR_INGREDIENT
    if (err) {
        throw err; 
      }
      //console.log(res.statusCode);
      //console.log(res.headers);
      // data is Buffer instance
      console.log(data.toString());
});


app.get('/recipes/:ingredient',function(request,response){
    let ingredientId = YOUR_INGREDIENT[request.params.ingredient]
   
    let recipeIngredients = ourData.results.filter(r => r.ingredientId===ingredientId)
    .map(p =>  {return{"Recipe" : r.recipe,
        "lastName" : p.lastName,
        "pos":r.pos,
        "Ingredients":r.array.forEach(i => {i})
        }});
   
        response.send(data[recipeIngredients ])
})






