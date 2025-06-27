// SELECIONAR TODAS LAS TAJETAS//
 const tarjetas = document.querySelectorAll(".card");
//  const tarjetaAtras = document.querySelectorAll(".card-back")


//Creo una funcion para crear un corazon//
function crearCorazon() {
    const corazon = document.createElement("div");//crea un elemento div en mi html
    // ahora a corazon le damos una clase para el css y darle estilo//
    corazon.className = "corazon-lluvia";
    // ahora ponemos un emoji de corazon dentro y se utiliza inner.HTML//
    corazon.innerHTML = "❤️"
    // declaro una constante para que el corazon aparezca//
    const posicionX = Math.random() * window.innerWidth;// Math.random() da un número entre 0 y 1 . window.innerWidth es el ancho de la ventana// Resultado: el corazón aparece en una posición horizontal aleatoria//

    //aplicamos este estilo para css//
    corazon.style.left = posicionX + "px"
    //añadimos el corazon a la pagina//
    document.body.appendChild(corazon);
    // tenemos que elimiar el corazon despues de 3 segundos con setTimeout//
    setTimeout(() => {
        if (corazon.parentNode) {//accede al elemeto padre de corazon en el html//
            corazon.parentNode.removeChild(corazon) //corazon.parentNode es el elemento que contiene a corazon.  removeChild(corazon) le dice: “Elimina a este hijo tuyo llamado corazon”//
        }
    }, 3000);// despues de 3 segundos
}// aqui acaba la funcion crearCorazones



//voy a crear multiples corazones con una funcion//
function lluviaCorazones() {
    for (let i = 0; i < 20; i++) { // esto es el bucle para que cree hasta 15 corazones//
        setTimeout(() => {
            crearCorazon()
        }, i * 100);
    }
}//i va desde 0 hasta 14 → se repite 15 veces//
/*En cada repetición, se ejecuta un setTimeout con este tiempo:
/*Si i = 0, espera 0 × 100 = 0 ms
Si i = 1, espera 1 × 100 = 100 ms
Si i = 2, espera 2 × 100 = 200 ms
Si i = 14, espera 1400 ms
Después de ese tiempo, se ejecuta crearCorazon().*/
//“Crea 15 corazones, pero con un pequeño retraso entre cada uno, como una lluvia.”//

//todo lo conectamos con las tarjetas//
const tarjetasActivadas = new Set();//esto set es que tarjetas ya activaron lluvia y la guardamos en la constante tarjetasActivadas
if (tarjetas.length > 0) {//esto pregunta si exixten tarjetas dentro del html,lo declaramos arriba tarjetas=card
    tarjetas.forEach(function (tarjeta, index) { //forEach es un método que hace que el código dentro se ejecute una vez por cada tarjeta.//
      
        console.log('🔗 Conectando tarjeta', index + 1);
      
        tarjeta.addEventListener('mouseenter', function () { //Añade un evento a cada tarjeta.Ese evento se activa cuando el ratón pasa por encima (mouseenter).//
        
            console.log("raton sobre tarjeta", index + 1);
            // lluviaCorazones()
            setTimeout(() => { // espera dos segundos antes de activar lo siguiente que viene
                // Solo activamos la lluvia una vez por entrada del ratón
                if (!tarjetasActivadas.has(index)) {
                    console.log("Activando lluvia para tarjeta", index + 1);
                    lluviaCorazones();//ejecuta la función que crea los corazones
                    tarjetasActivadas.add(index);
                }
            }, 1000); // 2000ms = 2s que dura tu animación CSS
        });

        // Cuando el ratón sale de la tarjeta, permitimos que se active de nuevo
         tarjeta.addEventListener('mouseleave', function () {
            console.log("Ratón salió de tarjeta", index + 1);
            // tarjetasActivadas.delete(index);
              setTimeout(() => {
                tarjetasActivadas.delete(index);
                console.log("🧹 Tarjeta", index + 1, "limpiada, puede activarse de nuevo");
            }, 500);

         });
    });

    console.log("lluvia de corazones activada");
} else {
    console.error("no se encontraron tarjetas con clase .card")
}

/*Math.random()
Esta función genera un número decimal al azar entre 0 y 1.
Ejemplos:

0.13

0.75

0.99

0.01

👉 Por sí sola no da una posición en píxeles, solo un número aleatorio pequeño.
 

🔹 window.innerWidth
Devuelve el ancho de la ventana del navegador (en píxeles).

Si tu pantalla mide 1200 píxeles de ancho, el valor sería 1200.

🔹 Math.random() * window.innerWidth
Multiplicas el número aleatorio (entre 0 y 1) por el ancho de la ventana.

Resultado: un valor aleatorio entre 0 px y el ancho total de la pantalla.
Ahora juntamos los dos:

Ejemplo: digamos que Math.random() devuelve 0.4

Y que window.innerWidth = 1000
posicionX = 0.4 * 1000 = 400
Eso significa que el corazón se colocará a 400 píxeles desde el borde izquierdo de la pantalla.

Cada vez que se ejecuta esta línea, da una posición distinta aleatoria.

corazon.style.left = posicionX + "px"
Esta línea toma el número que salió antes (por ejemplo 400) y lo convierte en "400px" (un valor CSS válido).

Se lo asigna al estilo left, que posiciona el corazón horizontalmente desde la izquierda.*/


