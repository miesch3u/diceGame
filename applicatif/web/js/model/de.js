export const initDe = () => {
    var de = {};
    de.valeur = 0;
    return de;
}

export const roll = (de) => {
    de.valeur = Math.floor(1+ (Math.random()*6))
}