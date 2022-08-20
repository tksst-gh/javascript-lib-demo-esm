export function add(num1, num2){
    return num1 + num2;
}

export function sub(num1, num2){
    return num1 - num2;
}

export function doThrow(){
    throw new Erro("thrown!");
}

export const variable1 = 40;
export let variable2 = 41;
export var variable3 = 42;

export default add;
