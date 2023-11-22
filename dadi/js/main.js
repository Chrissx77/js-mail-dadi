//generare numeri random range (1-6)
const userInt = Math.floor(Math.random()*6)+1;
const pcInt = Math.floor(Math.random()*6)+1;

console.log("User ha fatto: " + userInt);
console.log("Pc ha fatto: " + pcInt);

//controllo chi ha fatto il punteggio più alto
if(userInt > pcInt){
    console.log("Ha vinto User!");
}
else if(pcInt > userInt){
    console.log("Ha vinto Pc!");
}
else{
    console.log("Ha vinto lo sport!");
}

