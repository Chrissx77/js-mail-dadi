//generare numeri random range (1-6)
const userInt = Math.floor(Math.random() * 6) + 1;
const pcInt = Math.floor(Math.random() * 6) + 1;
const user = document.querySelector(".user");
const pc = document.querySelector(".pc");
user.append("User ha fatto: " + userInt);
pc.append("Pc ha fatto: " + pcInt);

const win = document.querySelector(".win");
const start = document.getElementById("start");
start.addEventListener("click",
    function () {
        //controllo chi ha fatto il punteggio più alto
        let flag = "";
        if (userInt > pcInt) {
            flag = "Ha vinto User!"
        }
        else if (pcInt > userInt) {
            flag = "Ha vinto Pc!"
        }
        else {
            flag = "Ha vinto lo Sport!"
        }
        win.innerHTML = flag;
    }
)



