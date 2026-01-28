export const initOption = (name, element, defaultValue) => {
    var options = {};
    options.name= name;
    options.element = element;
    options.value = defaultValue;
    return options;
}

export const getName = (option) => {
    return option.name;
}

export const getElement = (option) => {
    return option.element;
}

export const getValue = (option) => {
    return option.value;
}

export const setValue = (option, val) => {
     option.value = val;
}