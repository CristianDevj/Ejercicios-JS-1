function DibujarArbol(altura){
    console.log(altura)

    let arbol = "";

    for(let i=0; i<altura; i++){
        arbol += "<p>";
        for(let j=0; j<=i; j++){
            arbol +="*";   
        }
        arbol += "</p>";
    }

    document.getElementById('arbol').innerHTML = arbol;
}