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

}
