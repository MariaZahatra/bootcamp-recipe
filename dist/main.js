const source = $("#ingredient-template").html();
const template = Handlebars.compile(source);


const fetchData = function(){
    let ingredient = $("ingredient-input").val();
    
    $.get(`/recipes/${ingredient}`, function (response) {
        console.log(response)
        $("body").append(`<div>${response[0].firstName} - ${response[0].lastName}</div`)
        renderrecipes(response)

    })

}

const renderingredient = function(ingredient){
    const data = {ingredient:ingredient}
    const newHTML = template(data);
    console.log(newHTML)
    $(".ingredient").append(newHTML);
}


const title = document.getElementsByClassName("head")
const enterTitle = function (){
    title.innerHTML= "Recipes"
}

