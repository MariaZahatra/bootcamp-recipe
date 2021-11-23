

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




// let neruoscienceComputerBooks = []
    

// const fetch = function (startIndex) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=intitle:neuroscience&startIndex=${startIndex}&maxResults=40`,
//         success: function (data) {
//             console.log(data)
//             let book
//             for (let j = 0; j < data.items.length; j++) {
//                 book = data.items[j]
//                 if (book.volumeInfo.categories) {
//                     if (book.volumeInfo.categories.some(c => c === "Computers")) {
//                         neruoscienceComputerBooks.push(book.volumeInfo.title)
//                     }
//                 }


