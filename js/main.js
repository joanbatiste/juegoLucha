let selectPersonaje = (heroe)=>{
    //Seleccion heroes equipo A
    if(equipoA.length < 3){
        equipoA.push(heroe);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
    
    }else if(equipoB.length < 3){
        equipoB.push(heroe);
        document.getElementById(heroe).className="elegido";
        document.getElementById(heroe).onclick="";
    };

    console.log("El equipo A: ", equipoA);
    console.log("El equipo B: ", equipoB);
};

let equipoA = [];
let equipoB = [];
