//creo una lista mail di chi può accedere
const mailList = ["garozzochristian@gmail.com","giuseppecavallaro@gmail.com","andreabarreca@gmail.com"];
console.log(mailList);

//chiedo all'user la propria mail
const mailUser = prompt("Inserisci la tua mail");
console.log(mailUser);

//creo un flag se può o meno avere accesso
let permit = "";

//scorro la mia lista e confronto con mail di user
//se è presente do esito positivo, viceversa do esito negativo
for(let i = 0; i < mailList.length; i++){
    let mail =  mailList[i];
    if(mail === mailUser){
        permit = "Accesso consentito";
        break;
    }
    else{
        permit = "Accesso negato";
    }
}

console.log(permit);


