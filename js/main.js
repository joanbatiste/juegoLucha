//Clases
class Luchador{
    constructor(nombre,vida,fuerza,defensa,inteligencia){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.inteligencia = inteligencia;
    };
    ataque(enemigo){
        enemigo.vida -= this.fuerza - enemigo.defensa;
    };
    ataqueEspecial(enemigo){

    };
    defensa(enemigo){

    };
};
//Instanciamos los jugadores y variables
let player1 = new Luchador("Lich",300,30,40,50);
let player2 = new Luchador("King",300,50,40,30);
let player3 = new Luchador("Sniper",300,40,45,40);
let player4 = new Luchador("Luna",300, 40, 35,45);
let player5 = new Luchador("Antimage", 300, 50,45,35);
let player6 = new Luchador("Juggernaut",300, 45, 40,40);
let player7 = new Luchador("Drow",300, 40, 45,40);
let player8 = new Luchador("Viper",300, 50, 35,45);


let p1="";
let p2="";
let p3="";
let p4="";
let p5="";
let p6="";
let equipoA = [];
let equipoB = [];

//Traductor de heroe seleccionado:
let allheros = {
    "Lich": player1,
    "King": player2,
    "Sniper": player3,
    "Luna": player4,
    "Antimage": player5,
    "Juggernaut": player6,
    "Drow": player7,
    "Viper": player8,
}
//Cambiar de pantalla:
let cambiaPantalla = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    //aqui procedemos con el cambio

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "flex";
};
//Seleccion de equipos
let selectPersonaje = (heroe)=>{

        //Seleccion heroes equipo A
    if(equipoA.length < 3){
        //equipoA.push(heroe);
        equipoA.push(allheros[heroe]);
    
        
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
        


        rellenarRadiant();
        
        
        //Seleccion heroes equipo B
    }else if(equipoB.length < 3){
        //equipoB.push(heroe);
        equipoB.push(allheros[heroe]);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
   
        //Cambiar de pantalla porque ya tenemos a los personajes elegidos
        rellenarDire();
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen1","screen2");
            
        });
    
    };
    console.log("El equipo A: ", equipoA);
    console.log("El equipo B: ", equipoB);
};

//Función para el delay
const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

let rellenarRadiant = ()=>{
    for(let i=0; i < equipoA.length; i++ ){
        let showPlayer1 = document.getElementById("rival1");
        showPlayer1.innerHTML = `<div ><img src="img/${equipoA[0].nombre}.png"></div>`
        let showPlayer2 = document.getElementById("rival2");
        showPlayer2.innerHTML = `<div ><img src="img/${equipoA[1].nombre}.png"></div>`
        let showPlayer3 = document.getElementById("rival3");
        showPlayer3.innerHTML = `<div ><img src="img/${equipoA[2].nombre}.png"></div>`
    };
};
let rellenarDire = ()=>{
    for(let i=0; i < equipoB.length; i++ ){
        let showPlayer4 = document.getElementById("rival4");
        showPlayer4.innerHTML = `<div ><img src="img/${equipoB[0].nombre}.png"></div>`
        let showPlayer5 = document.getElementById("rival5");
        showPlayer5.innerHTML = `<div ><img src="img/${equipoB[1].nombre}.png"></div>`
        let showPlayer6 = document.getElementById("rival6");
        showPlayer6.innerHTML = `<div ><img src="img/${equipoB[2].nombre}.png"></div>`
    };
};


