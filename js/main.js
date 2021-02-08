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
        enemigo.vida -= (this.fuerza - enemigo.defensa)*(this.inteligencia-this.handicap);
    };
    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza)-enemigo.defensa;

    };
    defensa(){

    };
};
//Instanciamos los jugadores y variables
let player1 = new Luchador("Lich",200,40,30,20);
let player2 = new Luchador("King",200,50,40,10);
let player3 = new Luchador("Sniper",200,40,30,15);
let player4 = new Luchador("Luna",200, 40, 35,20);
let player5 = new Luchador("Antimage", 200, 50,35,15);
let player6 = new Luchador("Juggernaut",200, 45, 40,20);
let player7 = new Luchador("Drow",200, 40, 35,15);
let player8 = new Luchador("Viper",200, 50, 30,15);


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
        asignacionRadiant();
        mostrarLuchadoresA();
        
        
        //Seleccion heroes equipo B
    }else if(equipoB.length < 3){
        //equipoB.push(heroe);
        equipoB.push(allheros[heroe]);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
        rellenarDire();
        asignacionDire();
        mostrarLuchadoresB();
        
        
        
        //Cambiar de pantalla porque ya tenemos a los personajes elegidos
        
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen1","screen2");
            showNombreP1 = document.getElementById("fighter1");
            showNombreP1.innerHTML = `${p1.nombre}`;
            showNombreP4= document.getElementById("fighter4");
            showNombreP4.innerHTML = `${p4.nombre}`;
            
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
    vidaJugadoresRadiant();
    
};
let mostrarLuchadoresB = () =>{
    for(let i = 0; i<equipoB.length; i++){
        let p4 = document.getElementById("p4");
        p4.innerHTML = `<div ><img src="img/${equipoB[0].nombre}.png"></div>`;
        let p5 = document.getElementById("p5");
        p5.innerHTML = `<div ><img src="img/${equipoB[1].nombre}.png"></div>`;
        let p6 = document.getElementById("p6");
        p6.innerHTML = `<div ><img src="img/${equipoB[2].nombre}.png"></div>`;
    }
    vidaJugadoresDire();
    
};
//Asignacion de heroes con su correspondiente player
let asignacionRadiant = () =>{
    for(let i = 0; i< equipoA.length; i++){
        p1 = equipoA[0];
        p2 = equipoA[1];
        p3 = equipoA[2];

    };

};
let asignacionDire = () =>{
    for(let i = 0; i< equipoB.length; i++){
        p4 = equipoB[0];
        p5 = equipoB[1];
        p6 = equipoB[2];

    };

};
//Asignamos la vida a cada heroe 
let vidaJugadoresRadiant = () =>{
    for(let i = 0; i<equipoA.length; i++){
        showVidaP1 = document.getElementById("vidap1");
        showVidaP1.innerHTML = `(${p1.vida})`;
        

        showVidaP2= document.getElementById("vidap2");
        showVidaP2.innerHTML = `${p2.vida}`;
        

        showVidaP3= document.getElementById("vidap3");
        showVidaP3.innerHTML = `${p3.vida}`;
        
    };
};
let vidaJugadoresDire = () =>{
    for(let i = 0; i<equipoB.length; i++){
        showVidaP4= document.getElementById("vidap4");
        showVidaP4.innerHTML = `${p4.vida}`;
        

        showVidaP5= document.getElementById("vidap5");
        showVidaP5.innerHTML = `${p5.vida}`;
        

        showVidaP6= document.getElementById("vidap6");
        showVidaP6.innerHTML = `${p6.vida}`;
        
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
            
        }else{
       
            p1.ataque(p4);
            
        };
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");

            p4.ataqueEspecial(p1);
            

        }else{
            p4.ataque(p1);
            
        };
        
    };
    combatWiner()
    
};
let marcadorRadiant = 0;
let marcadorDire = 0;
//Ganador combates
let combatWiner= () =>{
    showVidaP1= document.getElementById("vidap1")
    showVidaP4= document.getElementById("vidap4");
    mensaje = document.getElementById("winner1");
    if (p1.vida < 1){
        marcadorDire += 1;
        showVidaP1.innerHTML = `${p1.vida = 0}`;
        document.getElementById("strike").onclick="";
        mensaje.innerHTML = `¡¡¡${p4.nombre} Wins!!!`;
        resolveIn(3000).then(delay => {

            cambiaPantalla("screen2","screen3");
            showNombreP2= document.getElementById("fighter2");
            showNombreP2.innerHTML = `${p2.nombre}`;
            showNombreP5= document.getElementById("fighter5");
            showNombreP5.innerHTML = `${p5.nombre}`;
        });
    }else if(p4.vida < 1){
        marcadorRadiant += 1;
        showVidaP4.innerHTML = `${p4.vida = 0}`;
        document.getElementById("strike").onclick="";
        mensaje.innerHTML = `¡¡¡${p1.nombre} Wins!!!`;
        resolveIn(3000).then(delay => {

            cambiaPantalla("screen2","screen3");
            showNombreP2= document.getElementById("fighter2");
            showNombreP2.innerHTML = `${p2.nombre}`;
            showNombreP5= document.getElementById("fighter5");
            showNombreP5.innerHTML = `${p5.nombre}`;
        });    
    };
    console.log(p1.vida);
    showVidaP1.innerHTML = `${p1.vida}`;
    showVidaP4.innerHTML = `${p4.vida}`;
};

const reset = document.getElementById('resetButton1');
reset.addEventListener('click', () => {
    window.location.reload();
})
    

const reset2 = document.getElementById('resetButton2');
reset2.addEventListener('click', () => {
    window.location.reload();
})  


