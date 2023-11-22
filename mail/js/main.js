//creo una lista mail di chi può accedere
const mailList = ["garozzochristian@gmail.com", "giuseppecavallaro@gmail.com", "andreabarreca@gmail.com"];

//creo un riferimento a UL e inserisco i tag LI con ogni mail
const listUl = document.querySelector(".listUl");

for (let i = 0; i < mailList.length; i++) {
    const elementLi = document.createElement("li");
    let mail = mailList[i];
    elementLi.append(mail);
    listUl.append(elementLi);
}

//chiedo all'user la propria mail
//creo un flag se può o meno avere accesso
//scorro la mia lista e confronto con mail di user
//se è presente do esito positivo, viceversa do esito negativo
const mailUser = document.getElementById("mailUser");
const access = document.querySelector(".access");
const buttonMail = document.getElementById("btnMail");
buttonMail.addEventListener("click",
    function(){
        let permit = "";
        for (let i = 0; i < mailList.length; i++) {
            let mail = mailList[i];
            if (mail === mailUser.value) {
                permit = "Accesso consentito!";
                break;
            }
            else {
                permit = "Accesso negato!";
            }
        }
        access.innerHTML = permit;
    }
)


