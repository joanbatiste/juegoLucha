//Función para el ataque Combate2

const atacarCombate2 = () => {
    //Funcion de ataque;
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);
    
    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
         
            p2.ataqueEspecial(p5);
            
        }else{
       
            p2.ataque(p5);
            
        };
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");

            p5.ataqueEspecial(p2);
            

        }else{
            p5.ataque(p2);
            
        };
        
    };
    combatWiner1()
    
};

//Ganador combates
let combatWiner1= () =>{
    showVidaP2= document.getElementById("vidap2")
    showVidaP5= document.getElementById("vidap5");
    mensaje = document.getElementById("winner2");
    if (p2.vida < 1){
        
        mensaje.innerHTML = `¡¡¡${p5.nombre} Wins!!!`;
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen3","screen4");
            
        });
    }else if(p5.vida < 1){
        mensaje.innerHTML = `¡¡¡${p2.nombre} Wins!!!`;
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen3","screen4");
            
        });    
    };
    console.log(p2.vida);
    showVidaP2.innerHTML = `${p2.vida}`;
    showVidaP5.innerHTML = `${p5.vida}`;
};