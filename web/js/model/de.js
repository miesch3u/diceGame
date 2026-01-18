export const initDe = () => {
    var de = {};
    de.valeur = 0;
    return de;
}

export const roll = (de) => {
    de.valeur = Math.floor(Math.random()*7)
}