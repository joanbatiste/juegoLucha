//Función para el ataque Combate3

const atacarCombate3 = () => {
    //Funcion de ataque;
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);
    
    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
         
            p3.ataqueEspecial(p6);
            
        }else{
       
            p3.ataque(p6);
            
        };
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");

            p6.ataqueEspecial(p3);
            

        }else{
            p6.ataque(p3);
            
        };
        
    };
    combatWiner2()
    
};

//Ganador combate
let combatWiner2= () =>{
    showVidaP3= document.getElementById("vidap3")
    showVidaP6= document.getElementById("vidap6");
    mensaje = document.getElementById("winner3");
    if (p3.vida < 1){
        
        mensaje.innerHTML = `¡¡¡${p6.nombre} Wins!!!`;
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen4","screen5");
            
        });
    }else if(p6.vida < 1){
        mensaje.innerHTML = `¡¡¡${p3.nombre} Wins!!!`;
        resolveIn(1000).then(delay => {

            cambiaPantalla("screen4","screen5");
            
        });    
    };
    console.log(p3.vida);
    showVidaP3.innerHTML = `${p3.vida}`;
    showVidaP6.innerHTML = `${p6.vida}`;
};