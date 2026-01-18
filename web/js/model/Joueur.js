export const initJoueur = (nom) => {
    var joueur = {};
    joueur.nom = nom
    joueur.score = 0
    return joueur
}

export const save = (joueur) => {
    const url = "http://localhost:9000/score/save/" + joueur.nom + "/" + joueur.score
    const params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        method : "POST",
        mode : "cors"
    };
    fetch(url, params).then(() => {document.location.reload();});
}