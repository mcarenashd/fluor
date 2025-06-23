// SELECIONAR TODAS LAS TAJETAS//
const tarjetas =document.querySelectorAll(".card");

//Creo una funcion para crear un corazon//
function crearCorazon(){
    const corazon = document.createElement("div");//crea un elemento div en mi html

}
// ahora a corazon le damos una clase para el css y darle estilo//
corazon.className = "corazon-lluvia";
// ahora ponemos un emoji de corazon dentro y se utiliza inner.HTML//
corazon.innerHtml = "❤️"