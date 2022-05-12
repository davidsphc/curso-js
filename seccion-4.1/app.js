let nota = prompt("Ingrea tu puntuaje")
let notaLetra = ""
if (nota >100){
    alert("Esa nota no es compatible")
}
 else if (nota >= 90 ){
    notaLetra = "A"
}else if (nota < 90 && nota >= 80) {
    notaLetra = "B"
}else if (nota <80 && nota >= 70){
    notaLetra = "C"
}else if ( nota <70 && nota >= 60){
    notaLetra = "D"
}else{
    notaLetra = "F"
}   

alert("Tu nota es: " + notaLetra)

















