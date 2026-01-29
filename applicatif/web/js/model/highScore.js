export const getTopScores = () => {
    fetch("http://localhost:9000/score/top",{
        headers: {
        "Accept": "application/json"
    }})
        .then(response => response.json())
        .then(data => {
            const list = document.createElement("table");
            const head = document.createElement("thead");
            const row = document.createElement("tr");
            const th1 = document.createElement("th");
            const th2 = document.createElement("th");
            th1.innerHTML = "nom";
            th2.innerHTML = "score";
            row.appendChild(th1);
            row.appendChild(th2);
            head.appendChild(row);
            list.appendChild(head);
            const body = document.createElement("tbody");
            data.forEach((e) => {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                td1.innerHTML = e.nom_joueur;
                td2.innerHTML = e.score;
                tr.appendChild(td1);
                tr.appendChild(td2);
                body.appendChild(tr);
            })
            list.appendChild(body);
            document.getElementById("DiceGame").appendChild(list);
        })
}