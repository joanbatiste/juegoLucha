//Clases
class Luchador{
    constructor(nombre,vida,fuerza,defensa,inteligencia){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.inteligencia = inteligencia;
        this.handicap = inteligencia - Math.floor(Math.random()*5);
    };
    ataque(enemigo){
        enemigo.vida -= this.fuerza - enemigo.defensa;
    };
    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza)*(this.inteligencia - this.handicap);

    };
    defensa(){

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
        mostrarLuchadoresA();
        asignacionRadiant();
        
        //Seleccion heroes equipo B
    }else if(equipoB.length < 3){
        //equipoB.push(heroe);
        equipoB.push(allheros[heroe]);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
        rellenarDire();
        mostrarLuchadoresB();
        asignacionDire();
        //enviar heroes a su pantalla lucha
        


        //Cambiar de pantalla porque ya tenemos a los personajes elegidos
        
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen1","screen2");
            
        });
    
    };
    console.log("El equipo A: ", equipoA);
    console.log("El equipo B: ", equipoB);
    console.log(p1,p2,p3,p4,p5,p6);
};

//Función para el delay
const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

//Rellenamos los heros del equipo Radiant
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
//Rellenamos los jugadores del equipo Dire
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
//Enviamos cada heroe a su pantalla de lucha
let mostrarLuchadoresA = () =>{
    for(let i = 0; i<equipoA.length; i++){
        let p1 = document.getElementById("p1");
        p1.innerHTML = `<div ><img src="img/${equipoA[0].nombre}.png"></div>`;
        let p2 = document.getElementById("p2");
        p2.innerHTML = `<div ><img src="img/${equipoA[1].nombre}.png"></div>`;
        let p3 = document.getElementById("p3");
        p3.innerHTML = `<div ><img src="img/${equipoA[2].nombre}.png"></div>`;
    }
    
}
let mostrarLuchadoresB = () =>{
    for(let i = 0; i<equipoB.length; i++){
        let p4 = document.getElementById("p4");
        p4.innerHTML = `<div ><img src="img/${equipoB[0].nombre}.png"></div>`;
        let p5 = document.getElementById("p5");
        p5.innerHTML = `<div ><img src="img/${equipoB[1].nombre}.png"></div>`;
        let p6 = document.getElementById("p6");
        p6.innerHTML = `<div ><img src="img/${equipoB[2].nombre}.png"></div>`;
    }
    
}
//Asignacion de heroes con su correspondiente player
let asignacionRadiant = () =>{
    for(let i = 0; i< equipoA.length; i++){
        p1 = equipoA[0];
        p2 = equipoA[1];
        p3 = equipoA[2];

    };

};
let asignacionDire = () =>{
    for(let i = 0; i< equipoA.length; i++){
        p4 = equipoB[0];
        p5 = equipoB[1];
        p6 = equipoB[2];

    };

};

//Función para el ataque
let atacar = () => {
    //Funcion de ataque;
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);

    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p1.ataqueEspecial(p4);
            p2.ataqueEspecial(p5)
        }else{

            p1.ataque(p4);
            p2.ataque(p5);
        }
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p4.ataqueEspecial(p1);
            p5.ataqueEspecial(p2);

        }else{
            p4.ataque(p1);
            p5.ataque(p2);

        }
    };

    console.log(p1.nombre + p1.vida);
    console.log(p4.nombre + p4.vida);
    console.log(p5.nombre + p2.vida);
    console.log(p2.nombre + p5.vida);
};



console.log(equipoA);
console.log(equipoB);
