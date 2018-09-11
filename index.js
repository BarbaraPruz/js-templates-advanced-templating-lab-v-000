let recipe = {
  name: "",
  description: "",
  ingredients: [ "","","","",""]
};

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('display_ingredient', function() {
    return new Handlebars.SafeString(this)
})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipeForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  recipe.name = "";
  recipe.description = "";
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
function createRecipe() {
  console.log("create recipe")
  let name = document.getElementsById("name").innerHTML;
  console.log(name);
  let description = document.getElementById("description").innerHTML;
  console.log(description);
  let ingredients = document.getElementsById("ingredients");
  console.log(ingredients);
}
