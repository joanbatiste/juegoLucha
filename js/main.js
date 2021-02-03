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
let equipoA = [];
let equipoB = [];


//Seleccion de equipos
let selectPersonaje = (heroe)=>{

        //Seleccion heroes equipo A
    if(equipoA.length < 3){
        equipoA.push(heroe);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
        rellenarRadiant();
        //Seleccion heroes equipo B
    }else if(equipoB.length < 3){
        equipoB.push(heroe);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";

        
        rellenarDire();


    };
    
    console.log("El equipo A: ", equipoA);
    console.log("El equipo B: ", equipoB);
    

};
let rellenarRadiant = ()=>{
    for(let i=0; i < equipoA.length; i++ ){
        let showPlayer1 = document.getElementById("rival1");
        showPlayer1.innerHTML = `<div ><img src="img/${equipoA[0]}.png"></div>`
        let showPlayer2 = document.getElementById("rival2");
        showPlayer2.innerHTML = `<div ><img src="img/${equipoA[1]}.png"></div>`
        let showPlayer3 = document.getElementById("rival3");
        showPlayer3.innerHTML = `<div ><img src="img/${equipoA[2]}.png"></div>`

    };
};
let rellenarDire = ()=>{
    for(let i=0; i < equipoB.length; i++ ){
        let showPlayer4 = document.getElementById("rival4");
        showPlayer4.innerHTML = `<div ><img src="img/${equipoB[0]}.png"></div>`
        let showPlayer5 = document.getElementById("rival5");
        showPlayer5.innerHTML = `<div ><img src="img/${equipoB[1]}.png"></div>`
        let showPlayer6 = document.getElementById("rival6");
        showPlayer6.innerHTML = `<div ><img src="img/${equipoB[2]}.png"></div>`

        

    };
};


