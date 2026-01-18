import {initDe, roll} from "./model/de.js"
import {initJoueur, save} from "./model/Joueur.js"
import {getTopScores} from "./model/highScore.js";

window.onload = () => {
    const div = document.getElementById("DiceGame");
    const btnStart = document.createElement("button");
    btnStart.onclick = startGame;
    btnStart.innerHTML = "start";
    div.appendChild(btnStart);
    const btnTopScores = document.createElement("button");
    btnTopScores.innerHTML = "Hall of fame";
    btnTopScores.onclick = showTopScores;
    div.appendChild(btnTopScores);

}

var nbRoll = 0;
var de1 = initDe();
var de2 = initDe();
var joueur = initJoueur();

const saveScore = () => {
    save(joueur)
}

const rollBoth = () => {
    nbRoll++;
    roll(de1)
    roll(de2)
    if ((de1.valeur + de2.valeur) == 7) joueur.score += 10;
    document.getElementById("score").innerHTML = "score : " + joueur.score;
    document.getElementById("D1").innerHTML = de1.valeur;
    document.getElementById("D2").innerHTML = de2.valeur;
    if (nbRoll == 10) {
        document.getElementById("roll").remove();
        var btnReplay = document.createElement("button");
        btnReplay.onclick = startGame;
        btnReplay.innerHTML = "rejouer"
        var div = document.getElementById("DiceGame")
        div.appendChild(btnReplay)
        var nameInput = document.createElement("input");
        nameInput.type = "text"
        nameInput.id = "name"
        nameInput.placeholder = "entrez votre nom pour sauvegarder"
        div.appendChild(nameInput);
        nameInput.onchange = (evt) => {
            joueur.nom = evt.target.value;
        };
        var btnSave = document.createElement("button");
        btnSave.onclick = saveScore;
        btnSave.innerHTML = "sauvegarder"
        div.appendChild(btnSave);
    }
}

const startGame = () => {
    nbRoll = 0;
    de1 = initDe();
    de2 = initDe();
    joueur = initJoueur();
    const div = document.getElementById("DiceGame");
    div.innerHTML = "";
    const btnBack = document.createElement("button");
    btnBack.onclick = () => {document.location.reload();};
    btnBack.innerHTML = "retour";
    div.appendChild(btnBack);
    var labelDe1 = document.createElement("p");
    var labelDe2 = document.createElement("p");
    labelDe1.innerHTML = "0";
    labelDe2.innerHTML = "0";
    labelDe1.id = "D1";
    labelDe2.id = "D2";
    labelDe1.style = "margin : 5px";
    labelDe2.style = "margin : 5px";
    var diceDiv = document.createElement("div");
    diceDiv.id = "diceDiv";
    diceDiv.appendChild(labelDe1);
    diceDiv.appendChild(labelDe2);
    diceDiv.style = "display : flex; flex-direction : row";
    div.appendChild(diceDiv);
    var labeleScore = document.createElement("p");
    labeleScore.id = "score"
    labeleScore.innerHTML = "score : 0";
    div.appendChild(labeleScore);
    var btnRoll = document.createElement("button");
    btnRoll.innerHTML = "roll"
    btnRoll.onclick = rollBoth;
    btnRoll.id = "roll";
    div.appendChild(btnRoll);
}

const showTopScores = () => {
    const div = document.getElementById("DiceGame");
    div.innerHTML = "";
    const btnBack = document.createElement("button");
    btnBack.onclick = () => {document.location.reload();};
    btnBack.innerHTML = "retour";
    div.appendChild(btnBack);
    getTopScores()
}