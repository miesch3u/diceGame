export const initRules = () => {
    var rules = {};
    rules.regle = "Règles : Lancez deux dés 6 une dizaine de fois. Obtenez 10 points chaque fois que vous obtenez 7. Faites le meilleur score !";
    return rules;
}

export const getRules = (rules) => {
    return rules.regle;
}