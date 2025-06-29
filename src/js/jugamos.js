// Necesito mi matriz

let sopaAll = [];

let sopaLength = 20;


for(i=0; i < sopaLength; i++){
    let row = [];

    for(j=0; j < sopaLength; j++){
        row.push("A");// Como puedo poner letras aleatorias
    }
    sopaAll.push(row)
}

console.log(sopaAll);
 
// Palabras Ocultas

const words = ['FLUOR', 'CARIES', 'DIENTES', 'NEON','FLUORESCENTE'];

const vectores = [];
vectores[0] = [0,1]; // -->
vectores[1] = [1,0]; // V
vectores[2] = [1,1]; // --> V.


for (h = 0; h < words.length; h++){

    let letra = Math.random() * sopaLength;
    letra = Math.round(letra);

    let palabra = words[h];

    let dir = Math.floor(Math.random() * vectores.length);
   //Para que no se salgan las palabras 
    

        switch(dir){
            case 0:
                for (i = 0; i < palabra.length; i++){
                    sopaAll[letra][i] = palabra[i];
                   
                }
            break;
        case 1:
            for (i = 0; i < palabra.length; i++){
                sopaAll[i][letra] = palabra[i];
            }
            break;
        case 2:
            for(i = 0; i < palabra.length; i++){
                sopaAll[letra + i][i] = palabra[i];
            }
            console.log("ups")
            break;
        default:
            console.log("No existe el vector");
            break;
        

    }

 }
